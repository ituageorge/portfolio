import React from 'react';

const CashTransferApp = () => {
  return <div id='cash-transfer' className="bg-blue-300 xl:grid lg:grid-cols-2">

      <div className="h-screen bg-cash-transfer p-5 bg-contain bg-auto bg-no-repeat bg-center"></div>

      <div className="h-100 grid text-left self-center m-5">
        <span className="text-5xl my-4 text-lime-600">Cash Transfer App</span>
        <p className="text-2xl my-4">This is a simple front-end app that no complex logic.</p>        
      </div>
         
  </div>;
};

export default CashTransferApp;
