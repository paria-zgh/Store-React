import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./SideBar";
import { TextFiled } from "./TextFiled";
import { Form, Formik } from "formik";
import Swal from 'sweetalert2';
export const UploadAvatar=()=>{
const navigate=useNavigate();
const [pic,setpic]=useState(null);
const formData=new FormData();
formData.append("profile-image",pic);
const handlesubmit=(()=>{
    axios.post(
        "http://kzico.runflare.run/user/profile-image",
        formData,
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
})
 return(
    <div className="bg-avatar">
        <Container >
            <Row >
                <Col md={3}>
            <Sidebar/>
                </Col>    
                <Col md={{ span: 4}} xs={10} className="input-text " style={{marginTop:"90px"}}>
                <label >Upload Image Profile :</label>
                <input onChange={(e)=>setpic(e.target.files[0])} className="form-control shadow-one mt-4 " type="file" /> 
                <Button type="submit" className="btn bn ms-1 p-2 w-100" onClick={handlesubmit}>
                    done
                </Button> 
                 </Col>
                </Row>
            </Container>
        </div>
    )
}