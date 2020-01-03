import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import navComponents from "./Components/navComponents";
import footerComponents from "./Components/footerComponents";
import homeComponents from './Components/homeComponents';
import loginComponents from './Components/loginComponents';
import dynamicWishes from './Components/dynamicWishes';
import registerComponents from './Components/registerComponents';


function App() {
  return (
    <div className="App">
     <Router> 
       <switch> 
         <Route exact path='/' component={navComponents}></Route>
         <Route exact path='/footer' component={footerComponents}></Route>
         <Route exact path='/home' component={homeComponents}></Route>
         <Route exact path='/login' component={loginComponents}></Route>
         <Route exact path='/wish' component={dynamicWishes}></Route>
         <Route exact path='/register' component={registerComponents}></Route>

       </switch> 
       </Router> 
       
    </div>
  );
}

export default App;
