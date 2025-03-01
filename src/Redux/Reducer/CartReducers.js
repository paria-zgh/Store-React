import { ADD_TO_CART, DELET_FROM_CART } from "../constants/cartConstans";
let INITIAL_STATE={
    cart:[]
};
if (localStorage.getItem("cart")){
    INITIAL_STATE.cart=JSON.parse(localStorage.getItem("cart"));
}else{
    INITIAL_STATE.cart=[];
}
 export const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                cart:[...action.payload]
            }
        case DELET_FROM_CART:
            return {
                cart:[...action.payload]
                }    
                case "remove":
                    return {
                     cart:[...action.payload]}                         
            default:
                return state;
    }
}
