import axios from 'axios';

export default function setAuthorizationToken() {

    const token = sessionStorage.getItem('authentication');

    if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
        return axios;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    } 
}; 