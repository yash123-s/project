import axios from 'axios';
import browserHistory from '../Utlis/browserHistory';

export function loginHandle(payload){
const options = {
    url: 'http://localhost:8212/Signin',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };
  
  return function(dispatch)
    {console.log(payload)
      axios(options)
      .then(response => {
        debugger
        console.log(response);
        sessionStorage.setItem('authentication', response.data.token)
        sessionStorage.setItem('role', response.data.role)
        browserHistory.push("/home");
      });
      dispatch({type:'LOGIN',payload:payload});
    }
}