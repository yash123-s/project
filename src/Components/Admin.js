import React, { Component } from 'react';
import '../css/Admin.css';
import NavComponents from '../Components/NavComponents';
import FooterComponents from '../Components/FooterComponents';

class Admin extends Component {
    render() {
        return (
            <div className="adminbg">
                <NavComponents />
                <h1>Admin Portal</h1>
                <table border="2">
                    <tr>
                        <th>Name</th>
                        <th >Donated for</th>
                        <th>Donated amount</th>
                        <th>Rupees/$</th>
                    </tr>
                    <tr>
                        <td>Yashaswini S Gowda</td>
                        <td> Children Education</td>
                        <td>10,000</td>
                        <td>Rupees</td>
                    </tr>
                    <tr>
                        <td>Karthik</td>
                        <td>Flood</td>
                        <td>20,000</td>
                        <td>Rupees</td>
                    </tr>
                    <tr>
                        <td>Joe</td>
                        <td>Old age</td>
                        <td>500</td>
                        <td>$</td>
                    </tr>
                </table>
                <div className="footeradmin"><FooterComponents /></div>
            </div>
        );
    }
}

export default Admin;