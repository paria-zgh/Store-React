
import { ADD_TO_CART, DELET_FROM_CART } from "../constants/cartConstans";
import Swal from 'sweetalert2';
  export const addToCart=(product)=>async(dispatch)=>{       
      const cart=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];   
      const duplicates=cart.filter(cartItem=>cartItem._id === product._id);
        if(duplicates.length === 0){
            const productToAdd={
                ...product,
                count:1,
            } 
            cart.push(productToAdd);
            localStorage.setItem("cart",JSON.stringify(cart));
            dispatch(
          {
              type:ADD_TO_CART,
              payload:cart,
             });
            Swal.fire({
              position: 'center',
              icon: 'success',
              title:"Done",
              text: 'This product added to your cart',
              showConfirmButton: false,
              timer: 1500
            })
            }else{
               Swal.fire({
                 position: 'center',
                 icon: 'warning',
                 title: 'Check your cart!',
                 text:" This product is in your cart,To change it, refer to the cart",
                 showConfirmButton: true,
                 timer: 3000
               })
            }       
}          
  export const deletFromCArt=(productItem)=>async(dispatch)=>{  
    const cart=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
    const updateCart= cart.filter(cartItem=>cartItem._id !== productItem._id);
    localStorage.setItem("cart",JSON.stringify(updateCart));
    dispatch(
        {
            type:DELET_FROM_CART,
            payload:updateCart,
           })
        };        
  export const deletAllCArt=()=>async(dispatch)=>{  
    const updateCart= [];
    localStorage.setItem("cart",updateCart);
    dispatch(
        {
            type:"remove",
            payload:updateCart,
           })
        };
       