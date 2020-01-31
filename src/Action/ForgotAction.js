import axios from 'axios'
export function ForgotHandle(payload){
  debugger;
const options = {
    url: 'http://localhost:4000/confirm',
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8'
    // },
    data: payload
  };
  return function(dispatch)
    {debugger;
      axios(options)
      .then(response => {
        console.log(response.status);
      });
      dispatch({type:'FORGOT',payload:payload});
    }
 }