import React from "react";

function TextInput({ guessArr, setGuessArr, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newGuesses = [...guessArr];
        newGuesses.push(guess);
        setGuessArr(newGuesses);
        setGuess("");
      }}
      className="guess-input-wrapper">
      <label htmlFor="input-field">Enter guess:</label>
      <input
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase().replace(/[^a-z]/gi, ""));
        }}
        required
        id="input-field"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default TextInput;
