import React from "react";

const Counters = ({
    counter
}) => {
    const items = [];

    for (let key in counter) {
        console.log(key+" "+ counter.key);
        items.push(<p>{key} : {counter[key]}&nbsp;&nbsp;&nbsp;</p>);
    }
    console.log("items", items);
    return (
        <div className="Counters">
            {items}
        </div>

    )
}

export default Counters;