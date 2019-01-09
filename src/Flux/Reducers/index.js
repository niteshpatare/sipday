import { combineReducers } from 'redux';
import payListReducers from './payListReducers';
import amountListReducers from './amountListReducers';

export default combineReducers({
    PAYLIST: payListReducers,
    AMOUNTLIST: amountListReducers,
});