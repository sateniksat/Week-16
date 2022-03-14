import React from 'react';
import { useMemo, useState } from "react";

export default function UseMemo() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const total = useMemo(() => secondCount + Math.random(), [secondCount]);
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
      <div>total: {total}</div>
    </>
  );
}

