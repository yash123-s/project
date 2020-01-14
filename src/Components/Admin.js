import React, { Component } from 'react';
import '../css/Admin.css';
import axios from 'axios';
import NavComponents from '../Components/NavComponents';
import FooterComponents from '../Components/FooterComponents';

class Admin extends Component {
    state={
    data:[]
    }
   
    componentDidMount=()=>{
        axios.get('http://localhost:8212/donate')
        .then(res => { console.log(res.data)
            this.setState({data: res.data});
        });
    }
    render() {
        return (
            <div className="adminbg">
                <NavComponents />
                <h1>Admin Portal</h1>
                <table border="2">
                    <tr>
                        <th>Name</th>
                        <th>Donated for</th>
                        <th>Donated amount</th>
                        <th>Rupees/$</th>
                    </tr>
                    {this.state.data.map(name =>
                    <tr>
                        <td>{name.firstname}</td>
                        <td>{name.project}</td>
                        <td>{name.amount}</td>
                        <td>{name.amounttype}</td>
                    </tr>   
                    )}
                
                </table>
                <div className="footeradmin"><FooterComponents /></div>
            </div>
        );
    }
}

export default Admin;