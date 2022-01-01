import React from "react";

type Props = {
  message1: string;
  message2: string;
};

function TestEl(props: Props) {
  return (
    <>
      <div className="sample">{props.message1}</div>
      <div className="sample">{props.message2}</div>
    </>
  );
}

export default TestEl;
