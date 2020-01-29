import axios from 'axios';
import browserHistory from '../Utlis/browserHistory';

export function loginHandle(payload){
const options = {
    url: 'http://localhost:4000/Signin',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };
  
  return function(dispatch)
    {debugger;
      console.log(options)

      console.log(payload)
      axios(options)
      .then(response => {
        debugger
        console.log(response);
        sessionStorage.setItem('authentication', response.data.token)
        sessionStorage.setItem('role', response.data.role)
        browserHistory.push("/home");
      })
      // .catch(response=>{
      //   sessionStorage.setItem('error', "your phone number or password is not matching")
      // });
      dispatch({type:'LOGIN',payload:payload});
    }
}