import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponents from "./Components/NavComponents";
import footerComponents from "./Components/footerComponents";
import homeComponents from './Components/homeComponents';
// import LoginComponents from './Components/LoginComponents';
// import DynamicWishes from './Components/DynamicWishes';
// import RegisterComponents from './Components/RegisterComponents';
// import FrontPage from './Components/FrontPage';
import Firstpage from './Components/Firstpage';
import RegisterPage from './Components/RegisterPage';
import SliderPage from './Components/SliderPage';
import ProjectPage from './Components/ProjectPage';


function App() {
  return (
    <div className="App">
     <Router> 
       <switch> 
         <Route exact path='/' component={NavComponents}></Route>
         <Route exact path='/footer' component={footerComponents}></Route>
         <Route exact path='/home' component={homeComponents}></Route>
         {/* <Route exact path='/login' component={loginComponents}></Route> */}
         {/* <Route exact path='/wish' component={DynamicWishes}></Route> */}
         {/* <Route exact path='/register' component={RegisterComponents}></Route> */}
         {/* <Route exact path='/front' component={frontpage}></Route> */}
         <Route exact path='/first' component={Firstpage}></Route>
         <Route exact path='/slider' component={SliderPage}></Route>
         <Route exact path='/second' component={RegisterPage}></Route>
         <Route exact path='/Project' component={ProjectPage}></Route>



       </switch> 
       </Router> 
       
    </div>
  );
}

export default App;
