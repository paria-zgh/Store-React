import React, { useState } from "react";
import { useLinkClickHandler, useLocation, useNavigate, useParams } from "react-router-dom";
import { Col,Container,Row } from "react-bootstrap";
import "../App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOneOrder } from "../Redux/action/orderAction";
export const OneOrder=()=>{
  const {orderId}=useParams();
   const {Order,loading,error}=useSelector(state=>state.Oneorder);
  console.log("order",Order?.shippingAddress?.address)
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getOneOrder(orderId))  ;
},[]);
  return(
    <div>
    {loading? (<div style={{height:"550px"}}><p><span class="loader"></span></p></div>):
     error?( 
   <div style={{margin:"150px"}}> 
     <h1 style={{color:"red"}}>  
     <span style={{color:"gray"}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-wifi-off" viewBox="0 0 18 18">
     <path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"/>
     </svg>
     </span>
     {error}!</h1>
     <p>Checking the network cables, modem,
      and router!</p>
       <p>Reconnecting to Wi-Fi!</p> 
     </div>
              ):(
<div className="App">
 <div  style={{ backgroundColor:"rgba(239, 247, 240, 0.973)",margin:"30px 50px 10px 50px",borderRadius:"20px"}} > 
  <Container style={{padding:"10px",borderBottom:"2px solid gray"}}>
    <Row>
      <Col md={2} >
      Image
      </Col>
      <Col md={2}   >
      Product Name
      </Col>
      <Col md={2}   >
      Brand
      </Col>
      <Col md={2}   >
      color
      </Col>
      <Col md={2} >
      Category
      </Col>
      <Col md={1}   >
      Quantity
      </Col>
     <Col md={1}  >
      Price 
      </Col> 
    </Row>
  </Container>
{Order.orderItems && Order.orderItems.map((item)=>{
  return(
    <Container style={{borderBottom:"1px solid green",padding:"20px"}}>
      <Row>
        <Col style={{height:"150px"}} md={2}  >
      <img src={item.product.image} style={{width:"100px",height:"150px",paddingBottom:"40px"}}/> 
        </Col>
      <Col md={2} >
      {item.product.name}
      </Col>
      <Col md={2} >
        {item.product.brand}
      </Col>
      <Col md={2} >
        {item.product.color}
      </Col>
      <Col md={2} >
        {item.product.category}
      </Col>
      <Col md={1}>
        {item.qty}
      </Col>
      <Col md={1} > 
        {item.product.price} $ 
      </Col>
      </Row>
      <Row style={{borderTop:"1px solid green",textAlign:"left",padding:"10px"}}>
        <Col>
           <b> description</b> :{item.product.description}
        </Col>
      </Row>
    </Container>
  )
})}
</div>
    <Container  style={{textAlign:"left",border:"1px solid gray",marginBottom:"20px",backgroundColor:"rgba(239, 247, 240, 0.973)"}}>
      <Row >
         <Col  md={6}  xs={12}style={{borderRight:"2px solid gray"}}>
          <h3 style={{borderBottom:"1px solid gray"}}>
           Peyment
          </h3>
          
          <p>PaymentMethod:{Order.paymentMethod}</p>
          <p>shipping Price:{Order.shippingPrice}$</p>
          <p>Total Price: {Order.totalPrice} $</p>
         </Col>
         <Col  md={6} xs={12}>
           <div>
           <h3 style={{borderBottom:"1px solid gray"}} >
            Shipping Address
           </h3>
           <p>Address: {Order?.shippingAddress?.address}</p> 
           <p>City:{Order?.shippingAddress?.city}</p>
           <p>Postalcode:{Order?.shippingAddress?.postalCode}</p>
           <p>Phone: {Order?.shippingAddress?.phone}</p> 
           </div>
         </Col>   
       </Row>
    </Container> 
</div>
              )}
              </div>
    )
}
