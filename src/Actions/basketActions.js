import axios from 'axios';

export function addToBasket(item){
  return dispatch =>{
    dispatch({type:"ADD_TO_BASKET", payload:item});
  }

}
