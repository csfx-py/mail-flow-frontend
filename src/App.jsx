import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import { AuthContext } from "./Contexts/AuthContext";
import Auth from "./Pages/Auth";
import Flows from "./Pages/Flows";

function App() {
  const { user } = useContext(AuthContext);

  const { pathname, state } = useLocation();
  return (
    <div className="flex flex-col h-screen w-screen">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={user ? <Flows /> : <Navigate to="/auth" state={pathname} />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to={state} /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
