import axios from 'axios';
import browserHistory from '../Utlis/browserHistory';


export function donateHandle(payload){
const options = {
  url: 'http://localhost:4000/donate',
  method: 'POST',
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json;charset=UTF-8'
  // },
  data: payload
  };
  
  return function(dispatch)
  {
    console.log(payload);
    axios(options)
    .then(response => {
      browserHistory.push('/card')
      console.log(response.status);
    });
    dispatch({type:'DONATE',payload:payload})
  }
}