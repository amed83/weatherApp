import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { api } from "../../utils/api/api";
import { apiKey } from "../../utils/apiKey";
import { errorMessages } from "../../constants/errorMessages";

const DashboardContainer = () => {
  const [weatherData, setWeatherData] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [latest, setLatest] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [location, setLocation] = useState({
    city: null,
    fetch: false,
  });

  useEffect(() => {
    fetchData();
    setStartTimer(false);
  }, [location]);
  useEffect(() => {
    if (weatherData) {
      const { city, id } = weatherData;
      if (!latest.find((el) => el.id === id)) {
        storeResults({ city, id });
      }
    }
  }, [weatherData.city]);

  const storeResults = (newResult) => {
    if (latest.length < 5) {
      return setLatest([...latest, newResult]);
    }
    const copyOfLatest = [...latest];
    copyOfLatest.splice(0, 1);

    return setLatest([...copyOfLatest, newResult]);
  };

  const fetchData = () => {
    if (!location.city) {
      return;
    }
    api(location.city, apiKey)
      .then((response) => {
        const { main, id } = response;
        if (errorMessage) {
          setErrorMessage(null);
        }
        setWeatherData({
          main,
          city: location.city,
          id,
        });
        setStartTimer(true);
      })
      .catch((err) => {
        setErrorMessage(
          err === 404
            ? `${errorMessages[404]}`
            : err === 401
            ? `${errorMessages[401]}`
            : `${errorMessages["default"]}`
        );
      });
  };

  const getInputData = (city) => {
    if (city) {
      setLocation({ ...location, city });
    }
  };

  const selectLatest = (data) => {
    const city = latest.find((element) => element.id === data).city;
    setLocation({ ...location, city });
  };

  const reFetchData = () => {
    return fetchData();
  };
  return (
    <Dashboard
      weatherData={weatherData}
      errorMessage={errorMessage}
      startTimer={startTimer}
      reFetchData={reFetchData}
      latest={latest}
      selectLatest={selectLatest}
      getInputData={getInputData}
    />
  );
};

export default DashboardContainer;
