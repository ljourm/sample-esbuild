import React from "react";

type Props = {
  message1: string;
  message2: string;
  numberA: number;
  numberB: number;
};

export const add = (a, b) => {
  return a + b;
};

function component(props: Props) {
  return (
    <>
      <div className="sample">{props.message1}</div>
      <div className="sample">{props.message2}</div>
      <div>{add(props.numberA, props.numberB)}</div>
    </>
  );
}

export default component;
