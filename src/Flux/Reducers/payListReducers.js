import { FETCH_PAYLIST, SUBMIT_PAY, FETCH_PAYLISTLOADING, FETCH_PAYMENTFLAG } from '../Actions/types';

const InitialState = {
    paylistitems : [],
    item : {},
    listloading: true,
    paymentflag: false
}

export default function(state = InitialState, action) {

    switch(action.type) {
        case FETCH_PAYLIST: 
            return {
                ...state,
                paylistitems: action.payload
            }
        case FETCH_PAYLISTLOADING:
            return {
                ...state,
                listloading: action.payload
            }
        case FETCH_PAYMENTFLAG:
            return {
                ...state,
                paymentflag: action.payload
            }
        default:
            return state;
    }
}