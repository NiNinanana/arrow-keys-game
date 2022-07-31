import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ level, reset }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed w-screen top-0 h-14 bg-orange-400 flex justify-between px-5 items-center">
        <button className="w-7 text-2xl" onClick={() => navigate("/")}>
          🏠
        </button>
        <div className="text-xl">
          {level ? `Level ${level}` : "화살표 키 게임"}
        </div>
        {level ? (
          <button className="w-7 text-4xl" onClick={() => reset()}>
            ⎌
          </button>
        ) : (
          <button
            className="w-7 text-2xl"
            onClick={() => alert("Coming Soon!")}
          >
            🤩
          </button>
        )}
      </div>
    </>
  );
};

export default Topbar;
