import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput/TextInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArr, setGuessArr] = React.useState([]);
  const [enableBanner, setEnableBanner] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("");

  useEffect(() => {
    if (
      guessArr.length === NUM_OF_GUESSES_ALLOWED ||
      guessArr.at(-1) === answer
    ) {
      const type = guessArr.length === NUM_OF_GUESSES_ALLOWED ? "sad" : "happy";

      setEnableBanner(true);
      setBannerType(type);
    }
  }, [guessArr]);

  return (
    <>
      <GuessList guessArr={guessArr} answer={answer} />
      <TextInput
        disabled={enableBanner}
        guessArr={guessArr}
        setGuessArr={setGuessArr}
      />

      {enableBanner && (
        <Banner
          type={bannerType}
          answer={answer}
          guessIndex={guessArr.length}
        />
      )}
    </>
  );
}

export default Game;
