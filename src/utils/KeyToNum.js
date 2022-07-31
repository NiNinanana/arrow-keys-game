const KeyToNum = (key) => {
  switch (key) {
    case "ArrowLeft":
      return 1;
    case "ArrowUp":
      return 2;
    case "ArrowDown":
      return 3;
    case "ArrowRight":
      return 4;
    default:
      return;
  }
};

export default KeyToNum;
