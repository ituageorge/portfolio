import React from 'react';

const NavFixedAtTop = () => {
    return(
        <header className="" id="home">
        <div className="fixed-top">

          
          <nav className="navbar navbar-expand-lg navbar-light bg-light bx-0">
            {/* <!-- <a className="navbar-brand" href="#"><img className="" src="img/aircv.PNG" alt="Aircv Logo"></a> --> */}
            <a className="navbar-brand" href='#myprofile'><h2 className="text-success">My Personal Profile</h2></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#home">HOME <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#about">ABOUT</a>
                <a className="nav-item nav-link" href="#exam-app">EXAM-APP</a>
                <a className="nav-item nav-link" href="#cash-transfer">CASH-TRANSFER</a>
                <a className="nav-item nav-link" href="#contact">CONTACT</a>
              </div>
            </div>
          </nav>
        </div>
  
        <div className="jumbotron imgBackground  rounded-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">

{/* //hhdhhhdhdhhdhhdhdh */}
                 <div className="col text-light">
                  {/* <h1 class=" name display-5 text-bold">Itua <br/> Osagie</h1> */}
                  {/* <p class="name lead">Web Designer & Front-end <br/>Developer </p> */}
                </div> 

                <div className="w-100"></div>
                <div className="block">
           <a href="https://www.facebook.com/itua.osagie.5"><i className="fa fa-facebook" style={{"fontSize":"16px", color:"white", padding: "11px"}} alt="facebook"></i></a>
           <a href="https://twitter.com/osagieGeorge100"><i className="fa fa-twitter" style={{"fontSize":"16px", color:"white", padding: "11px"}} alt="twitter"></i></a>
          <a href='https://www.linkedin.com/in/george-itua-ab5a01a4'><i className="fa fa-linkedin" style={{'fontSize':'16px', color:'white', padding: '11px'}} alt="linkedin"></i></a>

{/* //tttttttttttttttt */}
          {/* style={{float: 'left'}}
          style={{'align-self':'flex-end'}}  */}

              </div>
              </div>
            </div>
          </div>
        </div>
  
      </header>
    )
};

export default NavFixedAtTop;
