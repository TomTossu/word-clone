import React from "react";
import KeyboardRow from "../KeyboardRow/KeyboardRow";

function ScreenKeyboard({ validatedGuess }) {
  const alphabet = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <>
      {alphabet.map((row, index) => (
        <KeyboardRow
          key={index}
          numOfLetters={row.length}
          letters={alphabet[index]}
          validatedGuess={validatedGuess}
        />
      ))}
    </>
  );
}

export default ScreenKeyboard;
