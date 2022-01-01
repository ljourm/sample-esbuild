import React from "react";
import ReactDOM from "react-dom";
// import "./index.scss";

import TestEl from "../testEl";

let rootDocumentId = "root";

ReactDOM.render(
  <h1>
    Hello, world!
    <TestEl message1="hogehoge" message2="hoge" numberA={10} numberB={5} />
  </h1>,
  document.getElementById(rootDocumentId)
);
