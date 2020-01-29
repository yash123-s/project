// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {NewsHandle} from '../Action/NewsAction';

// class News extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       headingText:'',
//       contentText:''
//       }
//     }
//     handleSubmit = () => {
//       const { headingText,contentText} = this.state
//       const payload = {headingText,contentText}
//       this.props.NewsHandle(payload);
//     }
//     handleChange=(e)=>{
//       this.setState({[e.target.name]:e.target.value});
//     }
//   render() {
//     return (
//       <div>
//         <div><h1>Latest News</h1></div>
//         <div>
//           {(new Date().getDate())}/{(new Date().getMonth() + 1)}/{(new Date().getFullYear())}
//         </div>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <label>Heading:</label>
//             <input type="text" name="headingText" onChange={this.handleChange}></input>
//             <br/>
//             <label>Content:</label>
//             <input type="text" name="contentText" onChange={this.handleChange}></input>
//           </form>
//           <button type="button" onClick={this.handleSubmit}>Submit</button>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps=(state)=>{
//   const {headingText,contentText}=state.NewsReducer
//   return {headingText,contentText}
// }
// export default connect(mapStateToProps,{NewsHandle})  (News);
import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>email:</label>
                    <input type="email" name="email" placeholder="enter the registered email"></input>
                    <br></br>
                    <label>Confirm Password:</label>
                    <input type="password" name="password" placeholder="enter the new password"></input>
                    <br></br>
                    <button >Confirm</button>
                </form>
            </div>
        );
    }
}

export default News;