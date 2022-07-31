import React from "react";
import KeyToNum from "../../utils/KeyToNum";

const Arrow = ({ arrowContents, setArrowContents }) => {
  console.log(arrowContents);

  window.onkeydown = (keyEvent) => {
    const keyNum = KeyToNum(keyEvent.code);
    if (keyNum === arrowContents[0]) {
      console.log("성공");
      setArrowContents((prev) => prev.slice(1));
    }
    console.log(keyNum);
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
    </>
  );
};

export default Arrow;
