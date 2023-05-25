import React, { useEffect } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput/TextInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";
import ScreenKeyboard from "../ScreenKeyboard/ScreenKeyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [guessArr, setGuessArr] = React.useState([]);
  const [enableBanner, setEnableBanner] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("");
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  console.info({ answer });

  useEffect(() => {
    if (
      guessArr.length === NUM_OF_GUESSES_ALLOWED ||
      guessArr.at(-1) === answer
    ) {
      const type = guessArr.length === NUM_OF_GUESSES_ALLOWED ? "sad" : "happy";

      setEnableBanner(true);
      setBannerType(type);
    }
  }, [answer, guessArr]);

  const validatedGuess = guessArr.map((guess) => checkGuess(guess, answer));

  function handleRestartGame() {
    const newAnswer = sample(WORDS);

    setGuessArr([]);
    setEnableBanner(false);
    setBannerType("");
    setAnswer(newAnswer);
  }

  return (
    <>
      <GuessList validatedGuess={validatedGuess} answer={answer} />
      <TextInput
        disabled={enableBanner}
        guessArr={guessArr}
        setGuessArr={setGuessArr}
      />
      <ScreenKeyboard validatedGuess={validatedGuess} answer={answer} />
      {enableBanner && (
        <Banner
          type={bannerType}
          answer={answer}
          guessIndex={guessArr.length}
          handleRestartGame={handleRestartGame}
        />
      )}
    </>
  );
}

export default Game;
