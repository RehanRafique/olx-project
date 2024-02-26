// // Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const apiKey = 'YOUR_WEATHER_API_KEY'; // Replace with your API key

// //   const fetchWeatherData = async () => {
// //     try {
// //       const response = await axios.get(
// //        " https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"
// //       );
// //       setWeatherData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching weather data:', error);
// //     }
// //   };


//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = "http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8a13df165f9099bdd3008e667y64b2a56";
//       const response = await fetch(url);
//       console.log(response)
//       const resJson = await response.json();
//       setCity(resJson.main, resJson.weather);
//     };
//     fetchApi();
//   }, [search]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={fetchApi}>Get Weather</button>

//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}</h2>
//           <p>{weatherData.weather[0].description}</p>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;