
const initialState ={
productList:[],
filteredList:[],
filtersApplied:false,
fetching:false,
fetched:false,
error: null,
searchInput:""
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
  /////// SEARCH ///////

  case "UPDATE_SEARCH_INPUT":{
    return {...state, searchInput:action.payload}
    break;
  }

    case "SEARCH_PRODUCTS":{
      return {...state, filtersApplied:true, filteredList: state.productList.filter(item => item.name.toLowerCase().includes(state.searchInput.toLowerCase()))}
      break;
    }

    case "FILTERS_DEFAULT": {
      return { ...state, filtersApplied:false, searchInput:""}
      break;
    }

    break;
  default: return state;

}

    return state;
}
