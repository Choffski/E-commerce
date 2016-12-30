
const initialState ={
products:[],
basketID:"",
discount:0,
discountPercent:0,
totalPrice:0,
discountUsed:false
}

export default function reducer (state = initialState, action){

switch (action.type) {
  case "CASE_NAME":{

    break;
  }

    break;
  default: return state;

}

    return state;
}
