import React from "react";
import CountersStyled from "./Counters.style";

import Counter from "../Counter";

const Counters = (counter: Counter) => {
  return (
    <CountersStyled>
      {(Object.keys(counter) as (keyof typeof counter)[]).map((key) => (
        <p key={key}>
          {key} : {counter[key]}&nbsp;&nbsp;&nbsp;
        </p>
      ))}
    </CountersStyled>
  );
};

export default Counters;
