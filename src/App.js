import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponents from "./Components/NavComponents";
import FooterComponents from "./Components/FooterComponents";
import homeComponents from './Components/homeComponents';
import LoginComponents from './Components/LoginComponents';
// import DynamicWishes from './Components/DynamicWishes';
import RegisterComponents from './Components/RegisterComponents';
// import FrontPage from './Components/FrontPage';
import Firstpage from './Components/Firstpage';
import RegisterPage from './Components/RegisterPage';
import SliderPage from './Components/SliderPage';
import ProjectPage from './Components/ProjectPage';
import About from './Components/About';
import DonatePage from './Components/DonatePage';
import Admin from './Components/Admin';


function App() {
  return (
    <div className="App">
     <Router> 
       <switch> 
         {/* <Route exact path='/' component={NavComponents}></Route> */}
         <Route exact path='/footer' component={FooterComponents}></Route>
         <Route exact path='/' component={homeComponents}></Route>
         {/* <Route exact path='/login' component={LoginComponents}></Route> */}
         {/* <Route exact path='/wish' component={DynamicWishes}></Route> */}
         {/* <Route exact path='/register' component={RegisterComponents}></Route> */}
         {/* <Route exact path='/front' component={frontpage}></Route> */}
         <Route exact path='/first' component={Firstpage}></Route>
         {/* <Route exact path='/slider' component={SliderPage}></Route> */}
         <Route exact path='/second' component={RegisterPage}></Route>
         <Route exact path='/Project' component={ProjectPage}></Route>
         <Route exact path='/about' component={About}></Route>
         <Route exact path='/donate' component={DonatePage}></Route>
         <Route exact path='/admin' component={Admin}></Route>






       </switch> 
       </Router> 
       
    </div>
  );
}

export default App;
