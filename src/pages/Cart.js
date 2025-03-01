import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Col,Container,Row,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletFromCArt } from "../Redux/action/cartAction";
import { ADD_TO_CART } from "../Redux/constants/cartConstans";
import Swal from 'sweetalert2';
  export const Cart=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {cart}=useSelector(state=>state.cart);
    const handlesubmit=()=>{
      if(!localStorage.getItem("access")){
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Please Login',
          text:"for continue, you must be logged in",
          showConfirmButton: true,
        })
        navigate("/Login");
      }else if(localStorage.getItem("address") && localStorage.getItem("access")){
        navigate("/chekout")
      }else if(localStorage.getItem("access")){ 
       navigate("/address")
     } 
   }
   const handleCountChange=(e,productItem)=>{
   const cart=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
   cart.forEach(cartItem=>{
      if(cartItem._id===productItem._id){
        cartItem.count=e.target.value
      }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    dispatch({
      type:ADD_TO_CART,
    payload:cart,});
   }
   return(
    <div className="bg-card">
        {cart.length <= 0 ?(
       <div style={{height:"540px"}} >
    <div > 
    <h4 style={{paddingTop:"200px"}}>Your cart is empty</h4>
    <p>for continue shopping , go to home!</p>
    <Button className="btn bn pt-3" as={Link} to="/">Go Home</Button>
    </div>
    </div>
       ):( 
  <Container  >
     <Row>
       <Col md={8} xs={12}  > 
<table className="table" style={{border:"2px solid gray",backgroundColor:"rgba(216, 214, 214, 0.192)",marginTop:"60px",backgroundColor:"rgba(255, 255, 255, 0.5)"}} >
  <thead >
    <tr >
      <th  scope="col">Image</th>
      <th  scope="col">Product Name</th>
      <th   scope="col">Price</th>
      <th   scope="col">Quantity</th>
      <th  scope="col">Remove</th>
    </tr>
  </thead> 
  <tbody>
  { cart.map((productItem)=>{return(
    <tr key={productItem._id}   > 
      <th scope="row" style={{width:"150px",height:"150px",backgroundColor:"white"}}>{""}
      <img
      style={{maxWidth:"150px",maxHeight:"150px"}} 
      src={productItem.image}/>
      </th>
      <td style={{width:"250px"}} >
      <Link style={{textDecoration:"none"}} to={`/product/${productItem._id}`}>
      {productItem.name}
      </Link>
      </td>
      <td>{productItem.price} <b>$</b></td>
      <td>
        <input 
        style={{width:"4rem"}}
        type="number"
        min="1"
        max={productItem.countInStock}
        value={productItem.count}
        onChange={e=>handleCountChange(e,productItem)}
        />
      </td>
      <td>
        <button 
        onClick={()=>dispatch(deletFromCArt(productItem))} 
        style={{backgroundColor:"red",borderRadius:"5px",color:"white",border:"none",marginTop:"5px",width:"30px",height:"30px"}} >
        
         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-trash3 " viewBox="0 0 19 19">
         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
         </svg>
        </button>
      </td>
    </tr>
  )})}
  </tbody>
</table>
</Col>
<Col md={4} >
  <div style={{marginTop:"20px",marginBottom:"90px" ,border:"2px solid gray",padding:"9px",backgroundColor:"rgba(255, 255, 255, 0.904)"}}>
  <h2 style={{padding:"20px",backgroundColor:"#146d43c9"}}> cart summary</h2>
  {cart.map((item)=>{
    return(
<div style={{textAlign:"center",height:"130px",border:"1px"}} className="font-weight-light border-bottom" key={item._id}>  
  <p > {`${item.name}`}:</p>
  { `${item.count} * ${item.price} $ = ${item.count*item.price}$`}   
</div> 
  )})}
  <p style={{textAlign:"left",padding:"10px",margin:"8px",backgroundColor:"rgba(216, 214, 214, 0.192)"}}>
  <b>
  {`Total: ${cart.reduce((sum,item)=>{return(
      sum+item.count*item.price
       )},0)} $`}
    </b></p> 
<Button className="w-100 ms-1 btn bn" onClick={handlesubmit}>
  Proces to check out
</Button>
  </div>
</Col>
    </Row>
        </Container>
    )}
       </div>
     )
  }

     