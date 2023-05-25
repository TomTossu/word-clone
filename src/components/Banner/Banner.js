import React from "react";

function Banner({ type, answer, guessIndex }) {
  return (
    <div className={`${type} banner`}>
      {type === "sad" ? (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      ) : (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessIndex} guesses</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
