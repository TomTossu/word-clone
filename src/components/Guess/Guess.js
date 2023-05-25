import React from "react";
import { range } from "../../utils";
import Cell from "../Cell/Cell";

function Guess({ value }) {
  return (
    <p className="guess">
      <>
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={value ? value[num].letter : undefined}
            status={value ? value[num].status : undefined}
          />
        ))}
      </>
    </p>
  );
}

export default Guess;
