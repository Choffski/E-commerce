
const initialState ={
productList:[],
filteredList:[],
fetching:false,
fetched:false,
error: null
}

export default function reducer (state = initialState, action){

switch (action.type) {

  ///// GET PRODUCTS ////
  case "GET_PRODUCTS_PENDING":{

    return {...state, fetching:true, fetched:false};
    break;
  }

  case "GET_PRODUCTS_FULLFILLED":{

    return {...state, fetching:false, fetched:true, productList:action.payload}
    break;
  }
  case "GET_PRODUCTS_REJECTED":{

    return {...state, fetched:false, fetching:false, error:action.payload}
    break;
  }

    break;
  default: return state;

}

    return state;
}
