import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import DonateReducer from './DonateReducer';
import ForgotReducer from './ForgotReducer';
import NewPasswordReducer from './NewPasswordReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    RegisterReducer,
    LoginReducer,
    DonateReducer,
    ForgotReducer,
    NewPasswordReducer
})