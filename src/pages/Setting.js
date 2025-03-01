
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChangePro } from "../components/ChanegePro";
import { Sidebar } from "../components/SideBar";
export const Setting=(props)=>{
    return(
        <div className="bg-chprofile">
           <Container>
            <Row>   
     <Sidebar/>
            <Col  md={{ span: 4, offset: 3}}xs={10}>
     <ChangePro/>
            </Col>
            </Row>
           </Container>
        </div>
    )
}