import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Login = ({ setIsRegister }) => {
  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      login(data.email, data.password);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col justify-center rounded-lg bg-gray-200 shadow-lg shadow-gray-500 p-8">
      <h1 className="text-3xl text-center">Login</h1>
      <form className="flex flex-col gap-4 p-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-lg"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-lg"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <span
        className="text-center cursor-pointer text-blue-500"
        onClick={() => setIsRegister(true)}
      >
        Go to Register
      </span>
    </div>
  );
};

Login.propTypes = {
  setIsRegister: PropTypes.func.isRequired,
};

export default Login;
