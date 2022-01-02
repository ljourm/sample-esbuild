import React from "react";

export type Props = {
  message1: string;
  message2: string;
  numberA: number;
  numberB: number;
  onHogeClicked?: (hogeNumber: number) => void;
};

export const add = (a, b) => {
  return a + b;
};

let tmpNumber = 0;

function TestComponent(props: Props) {
  return (
    <>
      <div className="sample">{props.message1}</div>
      <div className="sample">{props.message2}</div>
      <div>{add(props.numberA, props.numberB)}</div>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.onHogeClicked && props.onHogeClicked(tmpNumber);
          tmpNumber++;
        }}
      >
        Hoge Button
      </a>
    </>
  );
}

export default TestComponent;
