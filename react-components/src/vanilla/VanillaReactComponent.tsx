import React from "react";
import ReactDOM from "react-dom";

import ReactComponent from "../components/ReactComponent";

const App = () => <ReactComponent />;

export default (selector: string): void => {
  ReactDOM.render(<App />, document.querySelector(selector));
};
