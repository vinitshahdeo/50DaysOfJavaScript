import "./App.css";
import { useEffect, useMemo, useState } from "react";
import GitHubButtons from "./components/GitHubButtons/GitHubButtons";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function App() {
  return (
    <>
      <div className="container">
        <GitHubButtons />
        <h1 className="title">#50DaysOfJavaScript</h1>
        <p className="description">
          A community-driven open-source initiative for elevating JavaScript
          skills through daily, practical coding challenges tailored to
          real-world tasks, led by a supportive global community of developers.
        </p>
        <a
          href="https://forms.gle/83ZKpF4S5VEqNG6P8"
          target="_blank"
          rel="noreferrer"
          className="join-button"
        >
          Join Now
        </a>
        <Timer deadline="February 21, 2024" />
        <div className="buttons">
          <a
            href="https://forms.gle/83ZKpF4S5VEqNG6P8"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Join as a Participant</button>
          </a>
          <a
            href="https://forms.gle/oQAFMDofBtjeawhp8"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Become a Community Partner</button>
          </a>
          <a
            href="https://forms.gle/zGHWps1t7heYbcrP7"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Register as a Mentor</button>
          </a>
        </div>
        <div className="footer">
          <img src="twitter-icon.svg" alt="twitter icon" />
          <p>
            Share on{" "}
            <a
              href="https://twitter.com/share?text=Join%20%2350DaysOfJavaScript%20&url=https%3A%2F%2F50daysofjavascript.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </p>
        </div>
      </div>
      <img src="moon.svg" alt="moon illustration" className="moon" />
      <img src="cube.svg" alt="cube-js illustration" className="cube" />
      <img src="star-1.svg" alt="star-pattern-1" className="star-1" />
      <img src="star-2.svg" alt="star-pattern-2" className="star-2" />
      <img src="star-3.svg" alt="star-pattern-3" className="star-3" />
      <img src="star-1.svg" alt="star-pattern-1" className="star-4" />
      <img src="star-2.svg" alt="star-pattern-2" className="star-5" />

      <img
        src="bg-gradient-img-1.svg"
        alt="bg-gradient-img"
        className="bg-gradient-img-1"
      />
      <img
        src="bg-gradient-img-2.svg"
        alt="bg-gradient-img"
        className="bg-gradient-img-2"
      />
    </>
  );
}
export const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="box">
          <p className="timetext">{`${Math.floor(value)}`.padStart(2, "0")}</p>
          <span className="text">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
