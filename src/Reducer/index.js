import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import DonateReducer from './DonateReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    RegisterReducer,
    LoginReducer,
    DonateReducer
})