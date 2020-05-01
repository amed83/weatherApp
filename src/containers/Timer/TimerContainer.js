import React, { useState, useEffect } from "react";
import Timer from "../../components/Timer/Timer";

const TimerContainer = ({ fetchData }) => {
  const [countdown, setCountdown] = useState(60);
  useEffect(() => {
    const timer =
      countdown >= 0
        ? setInterval(() => setCountdown(countdown - 1), 1000)
        : (setCountdown(60), fetchData());
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);
  return <Timer countdown={countdown} />;
};

export default TimerContainer;
