import React from "react";
import CountersStyled from "./Counters.style";

const Counters = ({
    counter
}) => {
    const items = [];

    for (let key in counter) {
        console.log(key+" "+ counter.key);
        items.push(<p key={key}>{key} : {counter[key]}&nbsp;&nbsp;&nbsp;</p>);
    }
    console.log("items", items);
    return (
        <CountersStyled>
            {items}
        </CountersStyled>

    )
}

export default Counters;