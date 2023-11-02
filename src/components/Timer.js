import React, { useEffect, useState } from "react";

const Timer = ({ setTimeOut, questionNumber }) => {
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(180);
  }, [questionNumber]);
  return timer;
};

export default Timer;
