import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head">Namaste React Title component🚀🚀🚀</h1>
);

const FunctionComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React from Function Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionComponent />);
