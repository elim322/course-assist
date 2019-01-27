import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const App = () => {
  return (
    <div>
      <p>hello world!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
