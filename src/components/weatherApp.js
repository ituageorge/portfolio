import React from 'react';

const WeatherApp = () => {
  return <div id='weather' className="xl:grid lg:grid-cols-2">

      <div className="h-screen  bg-weather-forecast p-5 bg-contain bg-auto bg-no-repeat bg-center"></div>

      <div className="h-100 bg-blue-300 grid text-left self-center p-5">
        <span className="text-5xl my-4 text-lime-600">Weather forecast App</span>
        <p className="text-2xl my-4">This is a react app .</p>
        <p className='text-2xl'>
 weather forecast app link <a href="https://ituageorge.github.io/weather_forecast_react/">https://ituageorge.github.io/weather_forecast_react/</a>
 </p>        
      </div>
         
  </div>;
};

export default WeatherApp;
