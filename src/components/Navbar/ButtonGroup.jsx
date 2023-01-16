import React, { useState } from "react";

export const ButtonGroup = ({ buttons }) => {
    const [clickedId, setClickedId] = useState(0);
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <button
            key={i}
            name={buttonLabel}
            onClick={() => setClickedId(i)}
            className={i === clickedId ? "navButton active" : "navButton"}
          >
            {buttonLabel}
          </button>
        ))}
      </>
    );
  };