import axios from 'axios'
import browserHistory from '../Utlis/browserHistory';
export function registerHandle(payload){
  debugger;
const options = {
    url: 'http://localhost:4000/Signup',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };
  
    return function(dispatch)
     {
        axios(options)
        .then(response => {
          console.log(response.status);
          browserHistory.push("/home");
        });
       dispatch({type:'REGISTER',payload:payload});
     }
 }
