import React from 'react';


const AboutMe = () => {
  return (
    <div id='about' className="row m-5 h-100 lg:h-screen xl:grid xl:grid-cols-2 gap-4 mt-5 md:mb-5">
      <div className="text-left self-center lg:m-5 lg:h-50">
        <span className="text-4xl md:text-5xl lg:text-9xl my-2 lg:my-3 text-lime-600">about me</span>
        <p className="text-3xl my-2">Helping you reach your full potential </p>
      </div>
      <div className="font-bold flex flex-col" >
        <div className="lg:h-50">
          <p className='text-4xl my-2'>who I am</p>
          <p className='my-2 text-2xl'>
            A JavaScript Developer with digital Experience. Skills include web
            and app development, analytical thinking and creative problem
            solving. Able to apply customer service concepts to digital services
            to improve user Experience for clients, employees and
            administration.
          </p>
          <p className='my-5 text-2xl'>I am keen to continue learning new skills and enjoy working in software and learning new things. </p>

               <p className='my-3 text-xl'> I am a professional person with good communication skills and time management. </p>
        </div>
        <div className="text-2xl  lg:py-5">
          <h2 className='text-4xl my-2'>What are my Skills </h2>
          <h3 className='my-1'>React </h3>
          <h3 className='my-1'>Express</h3>
          <h3 className='my-1'>Node</h3>
          <h3 className='my-1'>Mongoose</h3>
          <h3 className='my-1'>JavaScript</h3>
          <h3 className='my-1'>Webpack</h3>
          <h3 className='my-1'>Git and Github</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
