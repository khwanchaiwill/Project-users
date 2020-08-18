import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START});
        axiosWithAuth()
        .get(`http://localhost:8000/api/users`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => console.log(err))
    }

}