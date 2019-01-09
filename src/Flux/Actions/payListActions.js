import { FETCH_PAYLIST, SUBMIT_PAY, FETCH_PAYLISTLOADING, FETCH_PAYMENTFLAG } from './types';

export const fetchPaylist = () => dispatch => {
        console.log('fetching....');
        const callFetchApi = async () => {
            const response = await fetch('/api/paylist')
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            return body;
        };
        callFetchApi()
        .then(
            PAYLIST => dispatch({
                type: FETCH_PAYLIST,
                payload: PAYLIST.json
            })
        )
        .then(
            LISTLOADING => dispatch({
                type: FETCH_PAYLISTLOADING,
                payload: false
            })
        )
        .then(
            PAYMENTFLAG => dispatch({
                type: FETCH_PAYMENTFLAG,
                payload: 'all'
            })
        )

        .catch(err => console.log(err));

}

