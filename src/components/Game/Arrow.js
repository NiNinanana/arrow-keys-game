import React from "react";
import KeyToNum from "../../utils/KeyToNum";
import BottomArrow from "../Layout/BottomArrow";

const Arrow = ({ arrowContents, setArrowContents }) => {
  window.onkeydown = (keyEvent) => {
    const keyNum = KeyToNum(keyEvent.code);
    if (keyNum === arrowContents[0]) {
      setArrowContents((prev) => prev.slice(1));
    }
  };

  const clickButton = (keyNum) => {
    if (keyNum === arrowContents[0]) {
      setArrowContents((prev) => prev.slice(1));
    }
  };

  return (
    <>
      {arrowContents.map((el, idx) => (
        <span key={idx}>
          {el === 1 && <span>←</span>}
          {el === 2 && <span>↑</span>}
          {el === 3 && <span>↓</span>}
          {el === 4 && <span>→</span>}
        </span>
      ))}
      <BottomArrow clickButton={clickButton} />
    </>
  );
};

export default Arrow;
