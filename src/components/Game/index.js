/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "../Layout/Topbar";
import Arrow from "./Arrow";

const GamePage = () => {
  const navigate = useNavigate();
  const { level } = useParams();

  const [isStart, setIsStart] = useState(false);
  const [arrowContents, setArrowContents] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const randomArrow = () => {
    new Array(Number(level)).fill(1).forEach(() => {
      const random = Math.floor(Math.random() * 4 + 1);
      setArrowContents((prev) => [...prev, random]);
    });
  };

  const reset = () => {
    setIsStart(false);
    setArrowContents([]);
    setMinutes(0);
    setSeconds(-1);
    randomArrow();
  };

  useEffect(() => {
    randomArrow();
  }, [level]);

  useEffect(() => {
    if (!isStart) return;
    if (!arrowContents.length) {
      if (
        !confirm(
          `걸린 시간은 ${`00${minutes}`.slice(-2)}:${`00${seconds}`.slice(
            -2
          )}입니다!\n다음 레벨로 넘어갈까요?`
        )
      ) {
        reset();
        return;
      }
      setIsStart(false);
      setMinutes(0);
      setSeconds(-1);
      navigate(`/game/${Number(level) + 1}`);
    }
  }, [arrowContents]);

  return (
    <div className="pt-14">
      <Topbar level={level} reset={reset} />
      {!isStart ? (
        <div className="flex justify-center mt-20">
          <div className="border-2 border-orange-200 p-4 w-3/5 h-28 flex justify-center items-center">
            <button
              className="bg-orange-200 p-1 w-20 h-10"
              onClick={() => setIsStart(true)}
            >
              게임 시작
            </button>
          </div>
        </div>
      ) : (
        <>
          <Arrow
            arrowContents={arrowContents}
            setArrowContents={setArrowContents}
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
