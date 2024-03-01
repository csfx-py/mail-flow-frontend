import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="h-16 flex px-[10%] shadow-lg items-center justify-between w-full">
      <h1 className="text-3xl">Mail Flow</h1>
      <div>
        {user ? (
          <button
            onClick={() => {
              logout();
            }}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Nav;
