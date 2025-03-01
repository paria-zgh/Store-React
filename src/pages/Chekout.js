import React, {  useEffect, useState  } from "react";
import axios from "axios";
 import { Col,Container,Row,Button  } from "react-bootstrap";
import { Address } from "../components/Address";
import { Payment } from "../components/Payment";
import { SummaryChekout } from "../components/SummaryChekout";
import {  useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { deletAllCArt } from "../Redux/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
export const Chekout=()=>{
  const[or,setor]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const address=localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")):[];
    const cartt=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
     const orderitem=[];
     cartt.filter((item)=>{
       const Order={product:item._id,qty:item.count};
       orderitem.push(Order);
     })
    const handlesubmit=(()=>{
      const data={
        orderItems:orderitem,
        shippingAddress:address,
        paymentMethod: "Cash",
        shippingPrice: "3",
        totalPrice:parseInt(localStorage.getItem("total"))
      }
        const Buy=axios.post(
         "http://kzico.runflare.run/order/submit",data,
         {
           headers: {
             authorization:
               `Bearer ${localStorage.getItem('token') }`,
           },
         }
       ).then((res)=>{ 
        console.log(res);
        setor(true);
          dispatch(deletAllCArt());
          navigate("/");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your order was successful',
          showConfirmButton: true,
          timer: 1500
        })
      
       }).catch((error)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
       })
       
     })
   return(
<div className="bg-chekout">
  <Container className="mb-4" >
     <Row>
      <h2 style={{padding:"20px",backgroundColor:"#146d43c9"}}>
         Chekout
      </h2>
     <Col md={7} xs={12}  sm={12} style={{matginTop:"50px"}}>
 <SummaryChekout/>
     </Col>
     <Col md={5} sm={12} xs={12}  style={{matginTop:"50px"}}>
  <Container>
     <Row>
       <Col md={12} sm={12} xs={12}  style={{matginTop:"50px"}}>
<Address/>
       </Col>
    </Row>
    <Row>
      <Col md={12} sm={12} xs={12}  style={{matginTop:"50px"}}>
<Payment/> 
     </Col>
    </Row>
  </Container>
</Col>
<button className="w-100 ms-1 btn bn" type="submit"  onClick={handlesubmit} >
Buy
</button>
</Row>
</Container> 
</div>
     )
  }


