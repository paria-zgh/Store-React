import React from "react";
import * as Yup from "yup";
import { Form,Formik } from "formik";
import { TextFiled } from "../components/TextFiled";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Shiping=()=>{
  const address=localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")):[];
    const navigate=useNavigate();
    const  validate=Yup.object().shape({
        phone:Yup.string()
        .required("Required")
        .matches(/^(\+98|0)?9\d{9}$/,"number is not corect"),
        address:Yup.string().required("Required").min(11),
        city:Yup.string().required("Required").min(2),
        PostalCode:Yup.string().required("Required"),
      }) 
    return (     
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="bg-address">
          <Formik
          initialValues={{
            address:"",
            city:"",
            PostalCode:"",
            phone:"",
           }}
validationSchema={validate}   
onSubmit={(values)=>{
const address={
address:values.address,
city: values.city,
postalCode:values.PostalCode,
phone:values.phone,
}
localStorage.setItem("address",JSON.stringify(address));
navigate("/chekout");
}}
>
{formik =>(
 <div className="input-text" style={{width:"27rem",height:"35rem",marginTop:"50px"}}>
   <h1 className="my-4 font-weight-bold-display-4">address</h1>
   <Form  style={{width:"350px"}}  >
    <TextFiled label="*city:" name="city" type="text" />
    <TextFiled label="*address:" name="address" type="text"/>
    <TextFiled label="*postal code:" name="PostalCode" type="text"/>
    <TextFiled label="*Phone Number" name="phone" type="text"/>
    <Button className="w-100 ms-1 btn bn" type="submit" >Next</Button>
   </Form>
 </div>
)}
</Formik> 
        </div>
        

    )
}