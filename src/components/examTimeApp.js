import React from 'react';

// w-16 md:w-32 lg:w-48
// <!-- This will center text on mobile, and left align it on screens 640px and wider -->
// {/* <div class="text-center sm:text-left"></div> */}
/* <div class="bg-green-500 md:bg-red-500 lg:bg-green-500">
</div> */
// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px)
// 2xl	1536px	@media (min-width: 1536px)

// weather forecast app
// // https://ituageorge.github.io/weather_forecast_react/

const ExamTimeApp = () => {
  return (
    <div
      id="exam-app"
      className="row h-100 lg:h-screen xl:grid lg:grid-cols-2 gap-4 lg:my-3"
    >
      <div className="text-left self-center m-4  ">
        <span className="text-5xl my-5 text-lime-600">ExamTime App</span>
        <p className="text-2xl my-4">
          This is an app that evaluates your understanding of a particular
          topic.
        </p>
        <p className="text-xl lg:text-2xl my-4">
          A fullstack application made with the Mongoose, MongoDb, Express,
          React, and Node (MERN) stack. This project was set up from scratch
          with webpack and babel, then designed with tailwind css.
        </p>
        <p className="text-xl lg:text-2xl my-4">
          The end-point is fully authenticated with JSON Web Token(jwt)
        </p>
        <p className="text-xl lg:text-2xl my-4">
          You need to be a registered user to use this app.
        </p>
      </div>

      <div className="row sm:p-5 h-screen mx-5 exam-time bg-contain m-2 bg-auto bg-no-repeat bg-center"></div>
    </div>
  );
};

export default ExamTimeApp;
