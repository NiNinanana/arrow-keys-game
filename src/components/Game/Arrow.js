import React, { useState } from "react";
import KeyToNum from "../../utils/KeyToNum";
import BottomArrow from "../Layout/BottomArrow";
import Timer from "./Timer";

const Arrow = ({ arrowContents, setArrowContents, time, setTime }) => {
  const [isError, setIsError] = useState(false);

  window.onkeydown = (keyEvent) => {
    const keyNum = KeyToNum(keyEvent.code);
    if (keyNum === arrowContents[0]) {
      setArrowContents((prev) => prev.slice(1));
    } else {
      setTime((prev) => prev + 1);
      setIsError(true);
    }
  };

  const clickButton = (keyNum) => {
    if (keyNum === arrowContents[0]) {
      setArrowContents((prev) => prev.slice(1));
    }
  };

  return (
    <>
      <div className="w-full flex flex-wrap mt-5 px-4">
        {arrowContents.map((el, idx) => {
          if (idx > 6) return <span key={idx} />;
          return (
            <span
              key={idx}
              className="border-2 border-yellow-300 bg-yellow-200 text-3xl px-1 mr-2"
            >
              {el === 1 && <span>←</span>}
              {el === 2 && <span>↑</span>}
              {el === 3 && <span>↓</span>}
              {el === 4 && <span>→</span>}
            </span>
          );
        })}
        {arrowContents.length > 6 && <span className="text-3xl">···</span>}
      </div>
      <Timer
        time={time}
        setTime={setTime}
        isError={isError}
        setIsError={setIsError}
      />
      <BottomArrow clickButton={clickButton} />
    </>
  );
};

export default Arrow;
