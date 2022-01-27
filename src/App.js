import React from 'react';
import Portfolio from './components/portfolio';
import AboutMe from './components/aboutMe';
import MyMission from './components/myMission';
import ExamTimeApp from './components/examTimeApp';
import CashTransferApp from './components/cashTransferApp';
import Footer from './components/footer';
import NavFixedAtTop from './components/navAtTop';
import WeatherApp from './components/weatherApp';
import './App.css';


function App() {
  return (
    
    <div className="App h-100 overflow-hidden">
      
      <NavFixedAtTop />
      <Portfolio />
      <AboutMe />
      <MyMission />
      <ExamTimeApp />
      <WeatherApp />
      <CashTransferApp />
      <Footer />
     
    </div>
  );
}

export default App;
