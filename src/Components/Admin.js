import React, { Component } from 'react';
import '../css/Admin.css';

class Admin extends Component {
    render() {
        return (
            <div className="adminbg">
                <h1>Admin Portal</h1>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Donated for</th>
                        <th>Donated amount</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Admin;