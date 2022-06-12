const randomHex = () => {
  const hexDigits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let randomHexColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomIdx = Math.floor(Math.random() * 16);
    randomHexColor += hexDigits[randomIdx];
  }
  return randomHexColor;
};

export default randomHex;
