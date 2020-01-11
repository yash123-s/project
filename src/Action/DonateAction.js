import axios from 'axios';

export function donateHandle(payload){
const options = {
    url: 'http://localhost:8212/donate',
    method: 'POST GET',
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
          console.log(response.status);
        });
       dispatch({type:'DONATE',payload:payload});
     }
}