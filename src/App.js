import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';
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
import VerifyCard from './Components/VerifyCard';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (  
    (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
      <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
/>
);

function App() {
  return (
    <div className="App">
     <Router> 
        <Switch> 
          <Route exact path='/' component={Firstpage}></Route>
          <Route exact path='/second' component={RegisterPage}></Route>
          <PrivateRoute exact path='/home' component={homeComponents}></PrivateRoute>
          <PrivateRoute exact path='/Project' component={ProjectPage}></PrivateRoute>
          <PrivateRoute exact path='/about' component={About}></PrivateRoute>
          <PrivateRoute exact path='/donate' component={DonatePage}></PrivateRoute>
          <PrivateRoute exact path='/admin' component={Admin}></PrivateRoute>
          <PrivateRoute exact path='/card' component={VerifyCard}></PrivateRoute>
       </Switch> 
       </Router> 
       
    </div>
  );
}

export default App;
