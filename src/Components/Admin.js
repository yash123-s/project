import React, { Component } from 'react';
import '../css/Admin.css';
import axios from 'axios';
import NavComponents from '../Components/NavComponents';
import FooterComponents from '../Components/FooterComponents';

class Admin extends Component {
    state={
    data:[],
    search:''
    }
    componentDidMount=()=>{
      debugger;
      axios.get('http://localhost:4000/donate')
      .then(res => { 
        this.setState({data: res.data});
      });
    }
    handleChange=(e)=>{
      console.log(e.target);
      this.setState({search:e.target.value})
    }
    render() {
      var searchString=this.state.search.trim().toLowerCase(), library=this.state.data;
      if(searchString.length>0){
        library=library.filter(function(i){
          return i.firstname.toLowerCase().match(searchString)
        });
      }
      return (
        <div>
          <NavComponents />
          <div className="admin_search">
          <h1>Admin Portal</h1>
          <div class="search-container">
            <div className="searchContainer">
              <input className="inputsearch" type="text" placeholder="Search.." name="search" type="text" value={this.state.search} onChange={this.handleChange}/>
              <i style={{color:"white"}} class="fa fa-search"></i>
            </div>
          </div>
        </div>
          <table border="2">
            <tr>
              <th>Name</th>
              <th>Donated for</th>
              <th>Donated amount</th>
              <th>Rupees/$</th>
            </tr>
            {library.map(function(i){
                return <tr>
                  <td>{i.firstname}</td>
                  <td>{i.project}</td>
                  <td>{i.amount}</td>
                  <td>{i.amounttype}</td>
                </tr>
               
              })
            }
          </table>
          <div className="footeradmin"><FooterComponents /></div>
        </div>
      );
    }
}

export default Admin;