import React from "react";
import { TextFiled } from "./TextFiled";
import { Form,Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
export const ChangePro=()=>{
  const navigate=useNavigate();
  const validate=Yup.object().shape({
    FirstName:Yup.string()
         .required("Requaired")
         .min(3),
         LastName:Yup.string()
         .required("Requaired")
         .min(3),
         Gender:Yup.string()
         .matches(/^male$|^female$/,"gender is not vali! you must be choise male or female"),
         City:Yup.string()
         .min(3)
         .required("Required"),
         Age:Yup.string().matches(/^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/,"Your age must be between 15 and 120").required("Required"), 
        })
    return (
    <div>
 <Formik
   initialValues={{
    FirstName:"",
    LastName:"",
    Gender:"",
    Age:"",
    City:"",
   }}
   validationSchema={validate}
   onSubmit={(values)=>{
   const data={
   firstname: values.FirstName,
   lastname: values.LastName,
   gender:values.Gender,
   age: values.Age,
   city: values.City,
  }
   const pro=axios.put(
     "http://kzico.runflare.run/user/change-profile",data,
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
      text:"Your profile has been successfully changed",
      showConfirmButton: false,
      timer: 2000
    })
    navigate("/profile");
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
  <div className="input-text">
    <h1 className="my-2 font-weight-bold-display-2">Change Profile</h1>
    <Form  style={{width:"350px"}}  > 
     <TextFiled label="First Name:" name="FirstName" type="text"/>
     <TextFiled label="Last Name:" name="LastName" type="text"/>
     <TextFiled label="Gender:" name="Gender" type="text"/>
     <TextFiled label="Age:" name="Age" type="number"/>
     <TextFiled label="City:" name="City" type="text"/>
     <div>
     <button className="btn bn m-2 p-2 w-100 mt-4" type="submit" >done</button>
     </div>
    </Form>
  </div>
 )
 }
    </Formik>
    </div>)
}