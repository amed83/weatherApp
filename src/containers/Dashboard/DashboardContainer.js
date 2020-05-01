import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { api } from "../../api/api";
import { apiKey } from "../../utils/apiKey";

const DashboardContainer = () => {
  const [weatherData, setWeatherData] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [latest, setLatest] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [location, setLocation] = useState({
    location: null,
    fetch: false,
  });

  useEffect(() => {
    fetchData();
    setStartTimer(false);
  }, [location]);
  useEffect(() => {
    if (weatherData) {
      const { name, id } = weatherData;
      if (!latest.find((el) => el.id === id)) {
        storeResults({ name, id });
      }
    }
  }, [weatherData.name]);

  const storeResults = (newResult) => {
    if (latest.length < 5) {
      return setLatest([...latest, newResult]);
    }
    const copy = [...latest];
    copy.splice(0, 1);
    return setLatest([...copy, newResult]);
  };

  const fetchData = () => {
    if (!location.location) {
      return;
    }
    api(location.location, apiKey)
      .then((response) => {
        const { main, id, name } = response;
        if (errorMessage) {
          setErrorMessage(null);
        }
        setWeatherData({
          main,
          name: location.location,
          id,
        });
        setStartTimer(true);
      })
      .catch((err) => {
        setErrorMessage(
          err === 404
            ? "Please enter a valid location"
            : err === 401
            ? "Your're not authorized,please check you apiKey"
            : "Something went wrong,please try again"
        );
      });
  };

  const getInputData = (city) => {
    if (city) {
      setLocation({ location: city });
    }
  };

  const selectLatest = (data) => {
    const city = latest.find((element) => element.id === data).name;
    setLocation({ ...location, location: city });
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
