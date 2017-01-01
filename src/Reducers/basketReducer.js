
const initialState ={
products:[],
basketID:"",
totalPrice:0,
finalPrice:0,
discount:0,
discountPercent:0,
discountUsed:false,
paymentMethod:{},
shippingMethod:{},
}



export default function reducer (state = initialState, action){

switch (action.type) {
  ///// CART ITEMS /////
  case "ADD_TO_BASKET":{
    return { ...state, products: state.products.concat([action.payload])}
    break;
  }
  case "REMOVE_ITEM_FROM_BASKET":{
    return{ ...state}
    break;
  }

  ////// PRICE /////
  case "CALCULATE_TOTAL_PRICE":{
    return{ ...state, totalPrice:state.products.price.reduce((a, b) => a + b, 0)}
  }

    break;
  default: return state;

}

    return state;
}
