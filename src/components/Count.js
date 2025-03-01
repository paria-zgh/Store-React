import React from "react";
import { useSelector } from "react-redux";
export const Count=()=>{
    const {cart}=useSelector(state=>state.cart);
    return( 
        <div  className="rounded-circle  d-flex justify-content-center 
            align-item-center bg-danger" 
            style={{color:"white",width:"1.25rem",height:"1.25rem",fontSize:"0.75rem",
            position:"absolute",
            bottom:0,
            right:"0",
            transform:"translate(25%,25%)"  
          }}
            >  
       {`${cart.reduce((sum,item)=>{
        return(
           sum+parseInt(item.count)
          )},0)} `
          }
        </div>
    )
}