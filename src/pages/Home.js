import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllproduct } from "../Redux/action/ProductAction";
import { Card,Container,Col,Row, Badge } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import "../css/Home.css";
import "../css/loading.css";
import { addToCart } from "../Redux/action/cartAction";
export const Home=()=>{
    const {allprdct,loading,error}=useSelector((state)=>state.product);    
    const navigate=useNavigate();
    const dispatch=useDispatch();
     useEffect(()=>{
       dispatch(getAllproduct());
    },[])
   return (
<div>
   {loading? (<div style={{height:"550px"}}><p><span class="loader"></span></p></div>):
    error?( 
  <div style={{margin:"150px"}}> 
    <h1 style={{color:"red"}}>  
    <span style={{color:"gray"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-wifi-off" viewBox="0 0 18 18">
    <path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"/>
    </svg>
    </span>
    {error}!</h1>
    <p>Checking the network cables, modem,
     and router!</p>
      <p>Reconnecting to Wi-Fi!</p> 
    </div>):(
  <div  className="bg-home App">
<Container > 
   <Row>
   {allprdct && allprdct.map((item,index)=>{ 
     return(
      <Col key={item._id} lg={4} xs={12} md={6} className="mt-4 mb-4" >
        <Card className="Card" 
           >
          <Card.Body 
            onClick={(e)=>navigate(`/product/${item._id.toString()}`,{state:item})} 
          >
        <div style={{ backgroundColor:"rgba(35, 61, 23, 0.096)",width:"16rem",height:"300px",margin:'1rem'}}>
          <Card.Img src={item.image} alt={`${item.category} ${item.brand} ${item.color}`} className="Card-img " style={{width:"16rem",height:"300px"}}/>
        </div>
        <div style={{height:"10rem",marginBottom:"2px",marginTop:"3rem"}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text >{<p>{item.countInStock} available</p>}</Card.Text> 
        </div>
          </Card.Body>
          <Card.Text> 
          <button 
          className="btn bn"
          onClick={(e)=>{
            e.preventDefault();
            dispatch(addToCart(allprdct[index]));   
          }}        
          disabled={item.countInStock <=0}
          >
          +add to cart
          </button>
          </Card.Text> 
      <Card.Footer >
        <Container >
            <Row>
                <Col style={{textAlign:"left"}}>Price:{item.price}<b>$</b></Col>
                <Col style={{textAlign:"right",width:"16rem",height:"30px",paddingLeft:"0px"}}>
                <p >
                 rating:{item.rating}
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"className="bi bi-star-fill" viewBox="0 0 25 25" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="yellow" strokeWidth="0.3" stroke="#ff8800"></path> </svg>
                </p>
                </Col>
            </Row>
           </Container>
       </Card.Footer>
    </Card>
  </Col> 
        )
      })}
   </Row>
  </Container> 
  </div>
)}
</div>
    )
}
