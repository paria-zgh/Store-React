import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
export const Profile=()=>{
    const [dataa,setdata]=useState({});
    useEffect(()=>{
        const data= axios.get(
            "http://kzico.runflare.run/user/profile",
            {
              headers: {
                authorization:
                  `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ).then((res)=>{

            setdata(res.data.user)
          }).catch((error)=>{
            console.log(error.message)
          })
    },[])
    return(
      <div className="bg-profile">
       <Container >
        <Row>
          <Col md={{span:5,offset:7}} className="my-4" 
          style={{border:"1px solid gray",backgroundColor:"gray",
          borderRadius:"40px",padding:"30px"}} >
          <img src={dataa.image} style={{borderRadius:"50%", border:"1px solid black",width:"150px",height:"150px"}}/>
      <Table striped  hover variant="dark" style={{textAlign:"left",padding:"50px",marginTop:"30px",borderRadius:"30px"}} >
      <tbody>
        <tr>
          <td>Username:</td>
          <td>{`${dataa.username ? dataa.username : ""}`}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{`${dataa.email ? dataa.email : ""}`}</td>
        </tr>
        <tr>
          <td>Mobile:</td>
          <td>{`${dataa.mobile ? dataa.mobile : ""}`}</td>
        </tr>
        <tr>
          <td>First Name</td>
          <td>{`${dataa.firstname ? dataa.firstname : ""}`}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{`${dataa.lastname ? dataa.lastname : ""}`}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{`${dataa.gender ? dataa.gender : ""}`}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{`${dataa.age ? dataa.age : ""}`}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{`${dataa.city ? dataa.city : ""}`}Jacob</td>
        </tr>
      </tbody>
    </Table>
            </Col>
        </Row>
       </Container>
        </div>
    )
}