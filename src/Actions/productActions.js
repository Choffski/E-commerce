import axios from 'axios';

export function getProducts(){

  return dispatch => {
    dispatch({type:"GET_PRODUCTS_PENDING"});
    axios.get('http://localhost:8000/getProducts')
    .then(resp =>{
      dispatch({type:"GET_PRODUCTS_FULLFILLED", payload:resp.data})
    })
    .catch(err =>{
        dispatch({type:"GET_PRODUCTS_REJECTED", payload:err})
    })
  }
}
