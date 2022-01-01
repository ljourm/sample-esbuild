import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import testEl from "./testEl";

let rootDocumentId = "root";

ReactDOM.render(
  <h1>
    Hello, world!
    {testEl}
  </h1>,
  document.getElementById(rootDocumentId)
);
