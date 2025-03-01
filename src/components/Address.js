import React from "react";
import { useNavigate } from "react-router-dom";
export const Address=()=>{
    const navigate=useNavigate();
    const address=localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")):[];
    return(
<div className="table" style={{border:"2px solid rgba(216, 214, 214, 0.192)",backgroundColor:"rgba(216, 214, 214, 0.192)"}} >
  <div style={{borderBottom:"1px solid rgba(216, 214, 214, 0.192)",padding:"9px"}} >
  <b>address</b>
  </div>

  <div style={{textAlign:"left",padding:"20px",backgroundColor:"white"}}>
  <p >City:{address.city} {!address&& ("")}</p>
  <p>Address:{address.address} {!address&& ("")}</p>
  <p>Postal code:{address.postalCode} {!address&& ("")}</p>
  <p>Phone:{address.phone} {!address&& ("")}</p>
   </div>
<div style={{borderTop:"1px solid rgba(216, 214, 214, 0.192)",padding:"6px",textAlign:"left"}} >
 <button onClick={(e)=>{e.preventDefault();navigate("/address")}} className="btn-edit" >
  edit
 </button>
 </div>
</div> 
    )
}