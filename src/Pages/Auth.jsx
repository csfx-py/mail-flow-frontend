import { useState } from "react";
import Login from "../Components/Login";
import WaveBg from "../assets/waveBG.png";
import Register from "../Components/Register";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div
      className="flex justify-center items-center h-full w-full"
      style={{
        backgroundImage: `url(${WaveBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isRegister ? (
        <Register setIsRegister={setIsRegister} />
      ) : (
        <Login setIsRegister={setIsRegister} />
      )}
    </div>
  );
};

export default Auth;
