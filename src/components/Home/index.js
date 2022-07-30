import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [level, setLevel] = useState(1);
  console.log(level);
  return (
    <>
      <div>HomePage</div>
      <div>레벨 선택</div>
      <div>
        <button
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
          type="number"
          onChange={(e) => {
            setLevel(Number(e.target.value));
          }}
          value={level}
        />
        <button onClick={() => setLevel((prev) => prev + 1)}>+</button>
      </div>
      <button
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
    </>
  );
};

export default HomePage;
