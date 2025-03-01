import React, { useState } from "react";
export const Payment=()=>{
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
    const cart=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
    return(
        <div className="table" style={{border:"2px solid rgba(216, 214, 214, 0.192)",backgroundColor:"rgba(216, 214, 214, 0.192)"}} >
        <div style={{borderBottom:"1px solid rgba(216, 214, 214, 0.192)",padding:"9px"}} >
         <b>Payment</b>
        </div>
    <div style={{textAlign:"left",padding:"20px",backgroundColor:"white"}}>
        <p className="topping">
         shippingMethod :
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
       Cash
       </p>
       <p>{`Items Price: ${cart.reduce((sum,item)=>{
    return(
      (sum+item.count*item.price )
    )},0)} $`}</p>
         <p>Shiping Price: 3 $</p>
    </div>
    <div style={{border:"1px solid rgba(216, 214, 214, 0.192)",paddingTop:"1rem",color:"red",backgroundColor:" rgb(228, 233, 222)"}} >
        <b> <p>
  {`Total Price: ${cart.reduce((sum,item)=>{
     localStorage.setItem("total",(sum+item.count*item.price)+3)
    return(
      (sum+item.count*item.price )+3
     
       )},0)} $`}
       </p></b>
    </div>
       </div> 
    )
}