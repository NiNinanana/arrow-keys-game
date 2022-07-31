import React from "react";

const BottomArrow = ({ clickButton }) => {
  return (
    <>
      <div className="flex bg-gray-300 justify-around fixed w-full bottom-0 py-2 ">
        <div
          className="border-2 border-black w-1/5 h-14 text-3xl flex justify-center items-center"
          onClick={() => clickButton(1)}
        >
          ←
        </div>
        <div
          className="border-2 border-black w-1/5 h-14 text-3xl flex justify-center items-center"
          onClick={() => clickButton(2)}
        >
          ↑
        </div>
        <div
          className="border-2 border-black w-1/5 h-14 text-3xl flex justify-center items-center"
          onClick={() => clickButton(3)}
        >
          ↓
        </div>
        <div
          className="border-2 border-black w-1/5 h-14 text-3xl flex justify-center items-center"
          onClick={() => clickButton(4)}
        >
          →
        </div>
      </div>
    </>
  );
};

export default BottomArrow;
