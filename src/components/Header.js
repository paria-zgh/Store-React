import React, { useEfect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import { Navbar, Container,Nav,NavDropdown, Button, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Count } from "./Count";
import { useEffect } from "react";
import axios from "axios";
import { Expire, Logout } from "../Redux/action/LoginAction";
export const Header=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const username=localStorage.getItem("user");
  const {user}=useSelector((state)=>state.User);
  const {out}=useSelector(state=>state.LogOut);
  const logout=(e)=>{
    navigate("/");
    dispatch(Logout());
     localStorage.removeItem("access")
     localStorage.removeItem("token");
     localStorage.removeItem("address")    
}
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
      console.log(res.data); 
    }).catch((error)=>{
      dispatch(Expire())
      localStorage.removeItem("user");  
      localStorage.removeItem("token");
      localStorage.removeItem("access") ;
      localStorage.removeItem("address")  
      
    })
},[])
  return (
    <>
    <Navbar  className="mx-2 my-2 header" collapseOnSelect  variant="light">
      <Container >
        <Navbar.Brand as={Link} to="/" style={{color:"white"}}>Home</Navbar.Brand >
          <Nav style={{paddingLeft:"1px"}}>
            <Nav.Link as={Link} to='/Cart'  style={{ width: '3rem',height:"3rem",position:"relative",backgroundColor:"white",borderRadius:"50%"}}> 
            <svg xmlns="http:www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" id="IconChangeColor" transform="scale(-1,1)"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute" stroke="#001eff" stroke-width="0.2" fill="#02031c"></path> </svg> 
            <Count/>
            </Nav.Link>
           {username ?(  
             <Nav>
          <NavDropdown title={username} id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={(e)=>{e.preventDefault();navigate("/profile")}} >Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={(e)=>{e.preventDefault();navigate("/order")}}>Orders</NavDropdown.Item>
              <NavDropdown.Item onClick={(e)=>{e.preventDefault();navigate("/setting/changeProfile")}}>Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={logout} >Logout</NavDropdown.Item>
              </NavDropdown>
          </Nav>
           ):(
          <Nav>
              <Nav.Item as="li">
        <Nav.Link href="/login" style={{color:"white"}}>Login</Nav.Link>
      </Nav.Item>           
</Nav>
)}
            </Nav>
      </Container>
    </Navbar>
    </>
  );

}
