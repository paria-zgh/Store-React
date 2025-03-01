import React from "react";
import { Sign } from "../components/Sign";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sign.css';
import { Col, Container, Row } from "react-bootstrap";
export const SignUp=()=>{
  return(
<div className="signBody" >
        <Container  >
          <Row>
           <Col className="signCard">
      <Sign/>
          </Col>
          </Row>
        </Container>
</div>    
  );
}
// import React from "react";
//   import { Form,Formik } from "formik";
//  import { TextFiled } from "./TextFiled";
//  import * as Yup from "yup";
// import axios from "axios";
// import Swal from 'sweetalert2';
// import { useSelector } from "react-redux";
// import { Loading } from "../components/Loading";
// import { useNavigate } from "react-router-dom";
// export const Sign = () =>{ 
//   const {loading}=useSelector(state=>state.User);
//   const navigate=useNavigate();
//       const validate=Yup.object().shape({
//              Username:Yup.string()
//                   .required("Requaired")
//                   .min(5)
//                   .max(15),
//               Mobile:Yup.string()
//                   .matches(/^(\+98|0)?9\d{9}$/,"number is not corect")
//                   .required("Requaired"),
//              Email:Yup.string()
//                   .required("Requaired")
//                   .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"please enter valid email"),
//               Password:Yup.string()
//                   .min(8, 'Password must be 8 characters long')
//                   .matches(/[0-9]/, 'Password requires a number')
//                   .matches(/[a-z]/, 'Password requires a lowercase letter')
//                   .matches(/[A-Z]/, 'Password requires an uppercase letter')
//                   .matches(/[^\w]/, 'Password requires a symbol')
//                   .required("Requaired"),
//               ConfrimPassword:Yup.string()
//                  .oneOf([Yup.ref('Password'), null], 'Passwords must match'),
//               })
//            return(
//       <Formik
//          initialValues={{
//           Username:"",
//           Mobile:"",
//           Email:"",
//           Password:"",
//           ConfrimPassword:"",
//          }}
//          validationSchema={validate}
//          onSubmit={(values)=>{
//          const data={
//          username: values.Username,
//          email: values.Email,
//          password:values.Password,
//          mobile: values.Mobile,
//         }
//          axios.post(
//           "http://kzico.runflare.run/user/signup",data)
//           .then(res=>{
//             Swal.fire({
//               position: 'center',
//               icon: 'success',
//               title: 'Your account has been successfully created',
//               showConfirmButton: false,
//               timer: 1500
//             });
//            navigate("/Login");
//           })
//           .catch(error=>{
//             Swal.fire({
//               position: 'center',
//               icon: 'error',
//               title: error.response.data.message,
//               showConfirmButton: false,
//               timer: 3000
//             })
//           })
//          }}
//          >
//          {formik =>(
//           <div className="input-text " style={{height:"28rem",marginTop:"60px"}}>
//           {loading?
//             (<div>
//             <Loading> 
//             <Form  style={{width:"350px",padding:"30px"}} >
//             <TextFiled label="Username:" name="Username" type="text"/>
//                      <TextFiled label="Mobile:" name="Mobile" type="text"/>
//                      <TextFiled label="Email:" name="Email" type="email"/>
//                      <TextFiled label="Password:" name="Password" type="password"/>
//                      <TextFiled label="Confrim password:" name="ConfrimPassword" type="password"/>
//                      <button className="btn bn mt-4  m-1 px-3" type="submit" >Sign Up</button>
//                      <button className="btn bn mt-4 m-1 px-3" type="reset" >reset</button> 
//              </Form>
//             </Loading>
//             </div>
//         ):(
//         <div className="input-text">    
//           <Form  style={{width:"350px",padding:"30px"}} >
//           <h1 className="my-4 font-weight-bold-display-4">Sign up</h1>
//              <TextFiled label="Username:" name="Username" type="text"/>
//                      <TextFiled label="Mobile:" name="Mobile" type="text"/>
//                      <TextFiled label="Email:" name="Email" type="email"/>
//                      <TextFiled label="Password:" name="Password" type="password"/>
//                      <TextFiled label="Confrim password:" name="ConfrimPassword" type="password"/>
//                      <button className="btn bn mt-4  m-1 px-3" type="submit" >Sign Up</button>
//                      <button className="btn bn mt-4 m-1 px-3" type="reset" >reset</button>
//           </Form>     
//          </div> 
//             )}
//            </div>
//          )
//        }
//     </Formik>
//    )
//  }
