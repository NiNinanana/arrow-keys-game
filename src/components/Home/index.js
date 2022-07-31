import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../Layout/Topbar";

const HomePage = () => {
  const navigate = useNavigate();

  const [level, setLevel] = useState(1);

  return (
    <div className="pt-14">
      <Topbar />
      <div className="flex justify-center">
        <div className="border-2 border-orange-200 w-3/5 flex flex-col items-center mt-20 h-40 justify-around">
          <div className="text-2xl">레벨 선택</div>
          <div className="flex justify-between w-28">
            <button
              className="border-2 border-blue-200 w-7 bg-blue-300 hover:bg-blue-500"
              onClick={() => {
                if (level === 1) {
                  alert("레벨은 1레벨부터 시작합니다.");
                  return;
                }
                setLevel((prev) => prev - 1);
              }}
            >
              -
            </button>
            <input
              className="border-2 border-black w-10"
              type="number"
              onChange={(e) => {
                setLevel(Number(e.target.value));
              }}
              value={level}
            />
            <button
              className="border-2 border-blue-200 w-7 bg-blue-300 hover:bg-blue-500"
              onClick={() => setLevel((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="border-2 border-orange-200 p-1 bg-orange-300 hover:bg-orange-500"
            onClick={() => {
              if (!level) {
                alert("레벨은 1레벨부터 시작합니다.");
                return;
              }
              navigate(`/game/${level}`);
            }}
          >
            해당 레벨로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
