import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import TestEl from "./testEl";

let rootDocumentId = "root";

ReactDOM.render(
  <h1>
    Hello, world!
    <TestEl />
  </h1>,
  document.getElementById(rootDocumentId)
);
