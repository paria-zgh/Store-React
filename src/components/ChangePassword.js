import React from "react";
import { TextFiled } from "./TextFiled";
import { Form,Formik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import axios from "axios";
import { Sidebar } from "./SideBar";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const ChangePassword=()=>{
  const navigate=useNavigate();
  const validate=Yup.object().shape({
     old_password:Yup.string()
         .required("Requaired"),
         new_password:Yup.string()
         .min(8, 'Password must be 8 characters long')
         .matches(/[0-9]/, 'Password requires a number')
         .matches(/[a-z]/, 'Password requires a lowercase letter')
         .matches(/[A-Z]/, 'Password requires an uppercase letter')
         .matches(/[^\w]/, 'Password requires a symbol')
         .required("Requaired")
     })
    return (

    <div  className="bg-chpassword" >
 <Container style={{paddingTop:"25px"}}>
    <Row>
        <Col  md={{ span: 4, offset: 3}}xs={10}>
 <Sidebar/>
       <Formik
         initialValues={{
         old_password:"",
          new_password:"",
         
         }}
         validationSchema={validate}
         onSubmit={(values)=>{
         const data={
         old_password: values.old_password,
         new_password: values.new_password,
        }
        axios.put(
          "http://kzico.runflare.run/user/change-password",data,
            {
              headers: {
                authorization:
                  `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ).then(()=>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Done!',
              text:"Your password has been successfully changed",
              showConfirmButton: false,
              timer: 2000
            })
          }).catch((error)=>{  
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              text:error.response.data.message,
              showConfirmButton: false,
              timer: 3000
            })
          })
         }}
         >
         {formik =>(
          <div className="input-text mt-4" >
            <h1 className="my-4 font-weight-bold-display-2">Change Password</h1>
            <Form  style={{width:"350px", height:"17rem"}}  > 
             <TextFiled label="old Password:" name="old_password" type="password"/>
             <TextFiled label="new Password:" name="new_password" type="password"/>
             <button className="btn bn m-2 p-2 w-100 mt-4" type="submit" >done</button>
            </Form>
          </div>
         )
       }
    </Formik>
    </Col>
    </Row>
 </Container>
    </div>)
}