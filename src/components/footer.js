import React from 'react';
// import {Link} from 'react-router-dom'


const Footer = () => {
    return(
        <div id='contact' className="bg-blue-300 text-xl py-2 lg:text-2xl">
   
        <div className=" " id="contact">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-3 mx-auto text-left">
                <h2 className='font-extrabold'>Contacts</h2>
                <p>Hire me.</p>
              </div>
              <div className="col-sm-8 ">
               
                <div className="row justTexts sm-text-left mx-auto">
  
                  <div className="p-2 col-md-6">
                    <h5 className='font-extrabold'>Location</h5>
                    <p>Ilupeju, Lagos</p>
                  </div>
                  <div className="p-2 col-md-6">
                    <h5 className='font-extrabold'>Phone</h5>
                    <p>+2348062701633</p>
                  </div>
                  <div className="w-100"></div>
                  <div className="p-2 col-md-6">
                    <h5 className='font-extrabold'>Email</h5>
                    <p>ituaosagie100@gmail.com</p>
                  </div>
                  <div className="p-2 col-md-6">
                    <h5 className='font-extrabold'>Web</h5>
                    <p>george.com</p>
                  </div>
  
                </div>
                
              </div>
             
            </div>
           
          </div>
         
        </div>
      </div>
      <div className='container my-3'>
        <div className="row">
          <div className="col text-md-center font-extrabold">
            <p className="margin-b-0"><a href='#contact' className="fweight-700" > &copy; Copyright  by Itua George Osagie</a></p>
          </div>
        </div>
       
      </div>
      </div>
    )
}
export default Footer;