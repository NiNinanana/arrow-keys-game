/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../Layout/Topbar";
import Arrow from "./Arrow";

const GamePage = () => {
  const { level } = useParams();

  const [isStart, setIsStart] = useState(false);
  const [arrowContents, setArrowContents] = useState([]);
  const [time, setTime] = useState(0);
  const [smallTime, setSmallTime] = useState(0);

  const randomArrow = () => {
    new Array(Number(level)).fill(1).forEach(() => {
      const random = Math.floor(Math.random() * 4 + 1);
      setArrowContents((prev) => [...prev, random]);
    });
  };

  const reset = () => {
    setIsStart(false);
    setArrowContents([]);
    randomArrow();
    setTime(0);
  };

  useEffect(() => {
    randomArrow();
  }, [level]);

  useEffect(() => {
    if (!isStart) return;
    if (!arrowContents.length) {
      if (
        !confirm(
          `걸린 시간은 ${`00${Math.floor(time / 60)}`.slice(-2)}분 ${`00${
            time % 60
          }`.slice(-2)}초 ${`00${smallTime}`.slice(
            -2
          )}입니다!\n다음 레벨로 넘어갈까요?`
        )
      ) {
        reset();
        return;
      }
      setIsStart(false);
      setTime(0);
      location.href = `/game/${Number(level) + 1}`;
    }
  }, [arrowContents]);

  window.onkeydown = (keyEvent) => {
    if (keyEvent.code === "Enter") setIsStart(true);
  };

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
            time={time}
            setTime={setTime}
            smallTime={smallTime}
            setSmallTime={setSmallTime}
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
