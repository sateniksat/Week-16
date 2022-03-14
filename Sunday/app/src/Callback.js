import React from 'react'
import { useCallback, useState } from "react";

function Callback() {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
  
    const handleExShow = useCallback(() => console.log(secondCount), [
      secondCount
    ]);
    // const total = secondCount + Math.random();
    return (
      <>
        <div>firstCount: {firstCount}</div>
        <button
          onClick={() => {
            setFirstCount((count) => count + 1);
          }}
        >
          firstCount+1
        </button>
        <div>secondCount: {secondCount}</div>
        <button
          onClick={() => {
            setSecondCount((count) => count + 1);
          }}
        >
          secondCount+1
        </button>
        <button
          onClick={() => {
            handleExShow();
          }}
        >
          callback
        </button>
      </>
    );

}

export default Callback
