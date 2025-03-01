import React, { useEffect } from "react";
import { Container,Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllorders } from "../Redux/action/orderAction";
import { useSelector } from "react-redux";
export const Orders=()=>{
  const {orders,loading,error}=useSelector((state)=>state.Allorders);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    console.log(orders)
    useEffect(()=>{
        dispatch(getAllorders());
    },[dispatch])
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
<div>
   { orders && orders.map((item,index)=>{

    return(
  <div  key={item._id}className="order-div" >
    <Container style={{borderBottom:"1px solid gray",padding:"10px"}}>
      <Row>
        <Col md={3} >
        Image
        </Col>
        <Col md={3} >
        Product Name
        </Col>
        <Col md={3} >
        Quantity
        </Col>
        <Col md={3} >
        Price
        </Col>
      </Row>
    </Container>
 
  {item.orderItems.map((orderitem)=>{
   
    return(
      <Container key={orderitem._id} style={{borderBottom:"1px solid green",padding:"20px"}}>
        <Row>
          <Col style={{height:"100px"}} md={3} >     
        <img src={orderitem.product.image} style={{width:"100px",height:"100px"}}/>
          </Col>
        <Col md={3} >
        {orderitem.product.name} 
        </Col>
        <Col md={3} >
        qty:{orderitem.qty}
        </Col>
        <Col md={3} >
        {orderitem.product.price} $
        </Col>
        </Row>
      </Container>
    )
  })}
      <Container  style={{borderBottom:"1pcx solid red"}}>
        <Row>
  <Col md={4}>
      <p style={{textAlign:"left"}}>
       Total Price: {item.totalPrice} $
      </p>
  </Col>
  <Col md={4}>
      <button className="btn bn my-2 w-50" onClick={(e)=>{e.preventDefault();navigate(`/order/${item._id.toString()}`,{state:item})}}>
      info
     </button>
  </Col>
  <Col md={4}>
      <p style={{textAlign:"right"}}>
        PaymentMethod:{item.paymentMethod}
      </p>
  </Col>
        </Row>
      </Container>
        </div>
    )
   })}
    </div>
 )}
</div>
)}