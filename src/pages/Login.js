import React, { useEffect, useState } from "react";
import { Form,Formik } from "formik";
import { TextFiled } from "../components/TextFiled";
import * as Yup from "yup";
import { getUser } from "../Redux/action/LoginAction";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/Loading";
export const Login=()=>{
const navigate=useNavigate();
const dispatch=useDispatch();
const {access,loading}=useSelector(state=>state.User);
if(access){
  localStorage.setItem("access",access);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Welcome!',
    text:"You have successfully logged in",
    showConfirmButton: false,
    timer: 2000
  })
  navigate("/")
}
const acc=localStorage.getItem("access");
const username=localStorage.getItem("user");
const  validate=Yup.object().shape({
    Email:Yup.string()
    .required("Requaired")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"please enter valid email"),
  })  
  return(
    <div style={{display:"flex",justifyContent:"center"}} className="login" > 
      
      <Container>
        <Row>
          <Col md={{span:4,offset:2}}>          
<Formik
initialValues={{
  Email:"",
  Password:"",
}}
validationSchema={validate}
onSubmit={(values)=>{
  dispatch(getUser(values));
  values.preventDefault();
}}
>
{formik =>(  
  <div className="input-text " style={{height:"28rem",marginTop:"60px"}}>
  {loading?
    (<div>
    <Loading> 
    <Form  style={{width:"350px",padding:"30px"}} >
    <TextFiled label="Email:" name="Email" type="text"/> 
    <TextFiled label="Password:" name="Password" type="password"/>  
    <button className="btn m-3 bn"  style={{width:"100px"}} type="submit" >Login</button>
     <button className="btn m-3 bn" style={{width:"100px"}} onClick={(e)=>{e.preventDefault();navigate("/Login/signup")}} >signup</button> 
     </Form>
    </Loading>
    </div>
):(
<div>    
  <Form  style={{width:"350px",padding:"30px"}} >
     <h1 className=" font-weight-bold-display-4">Login</h1>
    <TextFiled label="Email:" name="Email" type="text"/>
    <TextFiled label="Password:" name="Password" type="password"/>     
    <button className="btn m-3 bn"  style={{width:"100px"}} type="submit" >Login</button>
    <button className="btn m-3 bn" style={{width:"100px"}} onClick={(e)=>{e.preventDefault();navigate("/Login/signup")}} >signup</button>  
  </Form>     
 </div> 
    )}
   </div>
)}
</Formik>
</Col>
 </Row>
  </Container>
    
</div>
  )
}
