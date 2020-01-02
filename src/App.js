import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import navComponents from "./Components/navComponents";
import footerComponents from "./Components/footerComponents";
import homeComponents from './Components/homeComponents';

function App() {
  return (
    <div className="App">
     <Router> 
       <switch> 
         <Route exact path='/' component={navComponents}></Route>
         <Route exact path='/footer' component={footerComponents}></Route>
         <Route exact path='/home' component={homeComponents}></Route>
       </switch> 
       </Router> 
    </div>
  );
}

export default App;
