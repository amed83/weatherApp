export const api = async (location, apiKey) => {
  return await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    })
    .then((response) => {
      return response;
    });
};
