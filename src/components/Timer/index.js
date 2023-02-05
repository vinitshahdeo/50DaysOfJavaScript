import { useEffect, useMemo, useState } from "react";
import { DAY, HOUR, MINUTE, SECOND } from "../../constants/time-constants";

const Timer = ({ deadline = new Date().toString() }) => {
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
    <div className="timer-container">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="time-box">
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

export default Timer;