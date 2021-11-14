import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
    //TODO: add time to these test pillS?!?!
  { id: "todo-0", name: "Blue Pill", time:"08:00", completed: true },
  { id: "todo-1", name: "Orange Pill",time:"20:58", completed: false },
  { id: "todo-2", name: "Beer",time:"20:59", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

