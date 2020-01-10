
import axios from 'axios'
export function registerHandle(payload){
const options = {
    url: 'http://localhost:8211/Signup',
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
        });
       dispatch({type:'REGISTER',payload:payload});
     }
 }