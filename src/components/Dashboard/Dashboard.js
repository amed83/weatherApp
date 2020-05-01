import React from "react";
import style from "./style.module.css";
import InputForm from "../../components/InputField/InputField";
import TimerContainer from "../../containers/Timer/TimerContainer";
import WeatherContainer from "../../containers/Weather/WeatherContainer";

import LatestResults from "../../components/LatestResults/LatestResults";

const Dashboard = ({
  weatherData,
  errorMessage,
  startTimer,
  reFetchData,
  latest,
  selectLatest,
  getInputData,
}) => {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboard_container}>
        <InputForm getInputData={getInputData} />
        <div className={style.weather_timer_container}>
          {weatherData && !errorMessage && (
            <WeatherContainer props={weatherData} />
          )}
          {errorMessage}
          <div className={style.timer}>
            {startTimer && <TimerContainer fetchData={reFetchData} />}
          </div>
        </div>

        <div className={style.latest}>
          {latest.length > 0 && (
            <LatestResults latest={latest} selectLatest={selectLatest} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
