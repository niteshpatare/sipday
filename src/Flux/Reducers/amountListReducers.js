import { FETCH_AMOUNTLIST, FETCH_AMOUNTDEFAULT } from '../Actions/types';

const InitialState = {
    amountitems : [],
}

export default function(state = InitialState, action) {

    switch(action.type) {
        case FETCH_AMOUNTLIST: 
            return {
                ...state,
                amountitems: action.payload
            }
        default:
            return state;
    }
}