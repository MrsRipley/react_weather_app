import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by McKenna Ripley and is{" "}
          <a
            href="https://github.com/MrsRipley/react_weather_app"
            target="_blank"
          >
            open-sourced on Github
          </a>{" "}
          <br></br>
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@krisroller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Kristopher Roller
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
