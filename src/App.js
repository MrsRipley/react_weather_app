import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by McKenna Ripley and is{" "}
          <a href="https://heuristic-cori-0dbca2.netlify.app" target="_blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
