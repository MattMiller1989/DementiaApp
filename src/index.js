import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Blue Pill", completed: true },
  { id: "todo-1", name: "Orange Pill", completed: false },
  { id: "todo-2", name: "Beer", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
// AppRegistry.registerComponent("App", () => App);

// AppRegistry.runApplication("App", {
//   rootTag: document.getElementById("root"),
//   tasks: DATA
// });
//ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
