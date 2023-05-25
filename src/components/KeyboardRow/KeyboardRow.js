import React from "react";
import { range } from "../../utils";

function getStatusByLetter(validatedGuess) {
  const statusObj = {};

  validatedGuess.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function KeyboardRow({ numOfLetters, letters, validatedGuess }) {
  let statusByLetter = getStatusByLetter(validatedGuess);

  return (
    <div className="keyboard">
      {range(numOfLetters).map((num) => (
        <span key={num} className={`key ${statusByLetter[letters[num]] || ""}`}>
          {letters[num]}
        </span>
      ))}
    </div>
  );
}

export default KeyboardRow;
