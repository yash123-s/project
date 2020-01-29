// import React, { Component } from 'react';
// import axios from 'axios';

// class Userlist extends Component {
//   state={
//     data:[]
//     }
//     componentDidMount=()=>{
//       axios.get('http://localhost:8212/Signup')
//       .then(res => { 
//         this.setState({data: res.data});
//       });
//     }
// handleSubmit=()=>{
//   const role=this.state.role;
  
//   if(this.state.role) this.setState({fnameError:'Firstname is required'});
//     else if(!role.test(this.state.role)) this.setState({fnameError:'Invalid Firstname'});
//     else{
//     this.setState({fnameError:''});
//     }
// }

//     render() {debugger
//       return (
//         <div>
//           <table border="2">
//             <tr>
//               <th>User Id</th>
//               <th></th>
//             </tr>
            
//             {this.state.data.map(name => 
//             {
//               if(name.role==='user'){
//                 return ( 
//             <tr>
//               <td>{name.firstname}</td>
//               <td>
//                 <button onClick={this.handleSubmit}>make admin</button>
//               </td>
//             </tr>   
//              )} })}
//           </table>
//         </div>
//       );
//     }
// }

// export default Userlist;
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class LiveNews extends React.Component {
    videoOnReady (event) {
        // access to player in all event handlers via event.target
      event.target.playVideoAt(50)
        console.log(event.target)
      }
      render () {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        }
        const {videoId} = this.props
        return (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this.videoOnReady}
          />
        )
      }
    }
export default LiveNews;
 