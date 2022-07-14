import React from "react";
import CountersStyled from "./Counters.style";

const Counters = ({ counter }) => {
  const items = [];

  for (let key in counter) {
    items.push(
      <p key={key}>
        {key} : {counter[key]}&nbsp;&nbsp;&nbsp;
      </p>
    );
  }
  return <CountersStyled>{items}</CountersStyled>;
};

export default Counters;
