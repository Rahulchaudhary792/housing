import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Navbar from './Navbar'*/
import House from './House'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './Greetings'
import Checkprops from './Checkprops'
import Statecheck from './Statecheck'
import Signup from './Signup'
function App() {

  return (
    <>
      {/*<Navbar/>*/}
      <h1 className="bg-dark text-light" style={{"textAlign": "center"}}>Welcome!</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Greetings</a>
              </li>
             
            </ul>
        
          </div>
        </div>
      </nav>

      <Router>
         <Routes>
            <Route exact path="/" element={<House himg = "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?cs=srgb&dl=architecture-facade-house-259600.jpg&fm=jpg" hname = "Mansion1"/>}/>
            <Route exact path="/" element={<House himg = "https://wallpaperaccess.com/full/2315968.jpg" hname = "Mansion2"/>} />   
            <Route exact path="/greetings" element={<Greetings/>}/>
            <Route exact path="/checkprops" element={<Checkprops name="john doe" age="25"/>}/>
            <Route exact path="/statecheck" element={<Statecheck/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </Routes>    
      </Router>
    </>
  )
}

export default App
