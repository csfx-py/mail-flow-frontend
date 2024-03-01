import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API,js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("withCreds"))
      API.get("/auth/refresh")
        .then((res) => {
          if (res.data.success) {
            setUser(res.data?.token);
          } else {
            setUser(null);
            localStorage.removeItem("withCreds");
            throw new Error("Failed to refresh token");
          }
        })
        .catch((err) => {
          setUser(null);
        });
  }, []);

  const register = async (userName, email, password) => {
    try {
      const res = await API.post("/auth/register", {
        userName,
        email,
        password,
      });
      if (res.data.success) {
        setUser(res.data?.token);
        localStorage.setItem("withCreds", true);
      } else {
        throw new Error(res.data.message);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data || error };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data.success) {
        setUser(res.data.token);
        localStorage.setItem("withCreds", true);
      } else {
        throw new Error(res.data.message);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data || error };
    }
  };

  const logout = async () => {
    try {
      const res = await API.get("/auth/logout");
      if (res.data.success) {
        navigate("/auth");
        setUser(null);
        localStorage.removeItem("withCreds");
      } else {
        throw new Error(res.data.message);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data || error };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
