import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const SummaryChekout=()=>{
  const navigate=useNavigate();
    const cart=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
    return(
 <table className="table" style={{border:"2px solid rgba(216, 214, 214, 0.192)",backgroundColor:"white"}}>
<thead  style={{backgroundColor:" rgba(107, 117, 116, 0.192)"}}>
<tr >
<th  scope="col">Image</th>
<th  scope="col">Product Name</th>
<th   scope="col">Price</th>
<th   scope="col">Quantity</th>
<th  scope="col">Color</th>
<th></th>
</tr>
</thead>
<tbody>
{ cart.map((productItem)=>{return(
<tr key={productItem._id}   >
<th scope="row" style={{width:"120px",height:"120px"}}>{""}
<img
style={{maxWidth:"120px",maxHeight:"120px"}} 
src={productItem.image}/>
</th>
<td style={{width:"350px"}} >
<Link style={{textDecoration:"none"}} to={`/product/${productItem._id}`}>
{productItem.name}
</Link>
</td>
<td style={{width:"150px"}}>{productItem.price} <b>$</b></td>
<td style={{width:"100px"}}>
{productItem.count}
</td>
<td style={{width:"100px"}}> 
{productItem.color}
</td>
</tr>
)})}
<tr  style={{textAlign:"left",backgroundColor:" rgb(228, 233, 222)"}}>
<td colSpan={6} >
<button  onClick={(e)=>{e.preventDefault();navigate("/cart")}} className="btn-edit" >
  edit
 </button>
</td> 
</tr>
</tbody>
</table>
    )
}