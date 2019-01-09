import { FETCH_AMOUNTLIST, FETCH_AMOUNTDEFAULT } from './types';

export const fetchAmountlist = () => dispatch => {
        console.log('amt fetching....');
        const callFetchApi = async () => {
            const response = await fetch('/api/amountlist')
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            return body;
        };
        callFetchApi()
        .then(
                AMOUNTLIST => dispatch({
                    type: FETCH_AMOUNTLIST,
                    payload: AMOUNTLIST.json
                })
        )
        .then(
           AMOUNTDEFAULT => dispatch({
                type: FETCH_AMOUNTDEFAULT,
                payload: 'select'
            })
        )
        .catch(err => console.log(err));
}

