import React from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { level } = useParams();

  return (
    <>
      <div>GamePage</div>
      <div>레벨: {level}</div>
      {new Array(Number(level)).fill(1).map((_, idx) => {
        const random = Math.floor(Math.random() * 4 + 1);

        return (
          <span key={idx}>
            {random === 1 && <span>←</span>}
            {random === 2 && <span>→</span>}
            {random === 3 && <span>↑</span>}
            {random === 4 && <span>↓</span>}
          </span>
        );
      })}
    </>
  );
};

export default GamePage;
