/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Arrow from "./Arrow";

const GamePage = () => {
  const navigate = useNavigate();
  const { level } = useParams();

  const [isStart, setIsStart] = useState(false);
  const [arrowContents, setArrowContents] = useState([]);

  const randomArrow = () => {
    new Array(Number(level)).fill(1).forEach(() => {
      const random = Math.floor(Math.random() * 4 + 1);
      setArrowContents((prev) => [...prev, random]);
    });
  };

  useEffect(() => {
    randomArrow();
  }, []);

  return (
    <>
      <div>GamePage</div>
      <button onClick={() => navigate("/")}>처음으로</button>
      <div>레벨: {level}</div>
      {!isStart ? (
        <button onClick={() => setIsStart(true)}>시작</button>
      ) : (
        <>
          <Arrow
            arrowContents={arrowContents}
            setArrowContents={setArrowContents}
          />
        </>
      )}
    </>
  );
};

export default GamePage;
