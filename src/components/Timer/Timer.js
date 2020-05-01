import React from "react";
import style from "./style.module.css";

const Timer = ({ countdown }) => {
  return (
    <div className={style.timer}>
      {countdown >= 0 ? `Refreshing in ${countdown} s` : 60}
    </div>
  );
};

export default Timer;
