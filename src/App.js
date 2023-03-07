import "./App.css";
import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>#50DaysOfJavaScript</h1>
        <p>Solve one question daily to ace 🎯 your next interview!</p>
      </div>
      <div className="container">
        <div className="container_1">
          <Timer deadline="April 5, 2023" />
        </div>
        <div className="container_2">
          <h3>
            Calling out 📣 participants, mentors, and communities for an open source initiative—join us to make a difference. More details 📩 to follow!
          </h3>
        </div>
      </div>
      <div className="buttons">
        <a href="https://forms.gle/zGHWps1t7heYbcrP7" target='_blank' rel="noreferrer">
          <button className="btn">🍿 Register as a mentor</button>
        </a>
        <a href="https://forms.gle/83ZKpF4S5VEqNG6P8" target='_blank' rel="noreferrer">
          <button className="btn">🏄 Join as a participant</button>
        </a>
        <a href="https://forms.gle/oQAFMDofBtjeawhp8" target='_blank' rel="noreferrer">
          <button className="btn">🚀 Become a community partner</button>
        </a>
      </div>
      <div className="footer">
        <code>
          console.log('Code awesome shit with <a href="https://github.com/vinitshahdeo" target='_blank' rel="noreferrer">@vinitshahdeo</a> & friends!');
        </code>
      </div>
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
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box">
            <p className="timetext">
              {`${Math.floor(value)}`.padStart(2, "0")}
            </p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
