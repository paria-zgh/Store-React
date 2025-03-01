import React from "react";
import {Nav} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/side.css";
export const Sidebar = () => {
    const navigate=useNavigate();
    return (
        <>
            <Nav className="col-md-3 d-none  d-md-block sidebar "
            activeKey='/setting/changeProfile'
            >
                <div className="sidebar-sticky p-3 "> <h3>Setting</h3></div>
            <Nav.Item >
                <Nav.Link 
                className="link-decoration"
                onClick={(e)=>{e.preventDefault();navigate("/setting/changeProfile")}} >Change Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  
                className="link-decoration" 
                onClick={(e)=>{e.preventDefault();navigate("/setting/changePassword")}}>Change Password</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                className="link-decoration"  
                onClick={(e)=>{e.preventDefault();navigate("/setting/uploadAvatar")}}>Upload Avatar</Nav.Link>
            </Nav.Item>
            </Nav>
        </>
        );
  };
 