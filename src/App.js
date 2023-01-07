import logo from "./logo.svg";
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
        <h1>50 Days of JavaScript</h1>
      </div>
      <div className="container">
        <div className="container_1">
          <Timer deadline="January, 30, 2023" />
        </div>
        <div className="container_2">
          <h2>
            Something Big update is coming by our team. Wait! We are launching
            soon practice of 50 days of JavaScript
          </h2>
    
        </div>
      
      </div>
      <div className="buttons">
      <button className="btn">Become a mentor</button>
      <button className="btn">Join as Participant</button>
      <button className="btn">Collab as community partner</button>
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
