import React from "react";
import style from "./style.module.css";

const LatestResults = ({ latest, selectLatest }) => {
  return (
    <div>
      Latest Results
      <div className={style.container} data-testid="latest-results">
        {latest.map((data, index) => {
          return (
            <div key={data.id} onClick={() => selectLatest(data.id)}>
              {data.name.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(LatestResults);
