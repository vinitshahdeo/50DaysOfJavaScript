import "./App.css";
import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>#50DaysOfJavaScript</h1>
        <p>Solve one JavaScript challenge daily to level up your skills!</p>
      </header>
      <main className="Main">
        <div className="TimerContainer">
          <Timer deadline="October 1, 2023" />
        </div>
        <div className="Overview">
          <h1>What is <span class="magic"><span class="magic-text">#50DaysOfJavascript</span></span></h1>
          <p>
            #50DaysOfJavaScript is a community-driven open-source initiative
            designed to help you become a better JavaScript developer. Each day,
            we provide a practical JavaScript coding challenge to enhance your
            skills.
          </p>
          <a
            href="https://forms.gle/zGHWps1t7heYbcrP7"
            target="_blank"
            rel="noreferrer"
            className="JoinButton Mentor"
          >
            🍿 Join as a Mentor
          </a>
          <a
            href="https://forms.gle/83ZKpF4S5VEqNG6P8"
            target="_blank"
            rel="noreferrer"
            className="JoinButton Participant"
          >
            🏄 Join as a Participant
          </a>
          <a
            href="https://forms.gle/oQAFMDofBtjeawhp8"
            target="_blank"
            rel="noreferrer"
            className="JoinButton Partner"
          >
            🚀 Become a Community Partner
          </a>
        </div>
      </main>
      <footer className="Footer">
        <p>
          Code awesome JavaScript with{" "}
          <a
            href="https://github.com/vinitshahdeo"
            target="_blank"
            rel="noreferrer"
            className="FooterLink"
          >
            @vinitshahdeo
          </a>{" "}
          & friends! Share on Twitter:{" "}
          <a
            href="https://twitter.com/share?text=Join%20%2350DaysOfJavaScript%20and%20level%20up%20your%20JavaScript%20skills!%20%23JavaScript%20%23CodingChallenge%20%23OpenSource&url=https%3A%2F%2Fyour-landing-page-url.com"
            target="_blank"
            rel="noreferrer"
            className="FooterLink"
          >
            Share
          </a>
        </p>
      </footer>
    </div>
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
    <div className="Timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="TimerBox">
          <p className="TimerText">{`${Math.floor(value)}`.padStart(2, "0")}</p>
          <span className="TimerLabel">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
