import axios from 'axios';

export function getProducts(){

  return dispatch => {
    dispatch({type:"GET_PRODUCTS_PENDING"});
    axios.get('http://localhost:8000/getAllProducts')
    .then(resp =>{
      dispatch({type:"GET_PRODUCTS_FULLFILLED", payload:resp.data})
    })
    .catch(err =>{
        dispatch({type:"GET_PRODUCTS_REJECTED", payload:err})
    })
  }
}
export function getAllInCategory(category= 'fruit'){

  return dispatch => {
    dispatch({type:"GET_PRODUCTS_PENDING"});
    axios.get('http://localhost:8000/getAllProductsInCategory/' + category)
    .then(resp =>{
      dispatch({type:"GET_PRODUCTS_FULLFILLED", payload:resp.data})
    })
    .catch(err =>{
        dispatch({type:"GET_PRODUCTS_REJECTED", payload:err})
    })
  }
}

export function search(searchInput=""){
  return dispatch =>{
    if(searchInput ===""){
      dispatch({type:"FILTERS_DEFAULT"});
    } else{
      dispatch({type:"UPDATE_SEARCH_INPUT", payload:searchInput})
      dispatch({type:"SEARCH_PRODUCTS"});
    }
  }
}
