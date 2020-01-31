import axios from 'axios'
import browserHistory from '../Utlis/browserHistory';

export function passwordHandle(payload){
const options = {
  url: 'http://localhost:4000/Forgot',
  method: 'POST',
  data: payload
};

return function(dispatch)
{debugger;
console.log(payload)
axios(options)
.then(response => {
console.log(response.status)
browserHistory.push('/forgot')
});
dispatch({type:'LOGIN',payload:payload});
}
}