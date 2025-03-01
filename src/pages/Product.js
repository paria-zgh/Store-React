import React, { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Row,Container,Col,Button } from "react-bootstrap";
import { addToCart } from "../Redux/action/cartAction";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneproduct } from "../Redux/action/ProductAction";
export const Product=()=>{
  const navigate=useNavigate();
  const {product,loading,error}=useSelector(state=>state.OneProduct)
  const handleAddToCart=()=>{
         dispatch(addToCart(product));    
       }
  const dispatch=useDispatch();
  const {productId}=useParams();
useEffect(()=>{
  dispatch(getOneproduct(productId))
},[dispatch,productId]);
    return(     
 <div style={{display:"flex",justifyContent:"center",alignContent:"center"}} className="bp"> 
 <Card style={{width:"60rem",margin:"1rem",height:"550px"}}>
  <Card.Body className="d-flex flex-colomn" style={{padding:"1rem" ,}}>
    <Container >
        <Row>
        <Col >
            <div style={{width:"260px",height:"300px",margin:"40px"}} >
           <Card.Img  src={product.image} alt={`${product.category} ${product.brand} ${product.color}`} className="Card-img " style={{width:"260px",height:"300px"}}/>
           </div>
          </Col>
        <Col style={{textAlign:"center",paddingTop:"43px"}} >
           <Card.Title className="mb-4"> {product.name}</Card.Title>
           <Card.Text><p>brand:{product.brand}</p>
            <br/>
            <p>color:{product.color}</p><br/>
            <p>Price: {product.price} $</p><br/>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 25 25" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="yellow" strokeWidth="0.3" stroke="#ff8800"></path> </svg> 
             rating :{product.rating}
           </Card.Text>
         </Col> 
        </Row>
    </Container>
  </Card.Body>
  <Card.Footer className="w-100" style={{height:"90px"}} >
      <Button  className="btn mt-1 mx-3 px-4 bn "
           type="button"
           onClick={handleAddToCart}
           disabled={product.countInStock <=0}
            >add to Cart
      </Button>
      <Button className="btn bn mt-1 mx-3" style={{width:"160px"}} onClick={()=>{navigate("/cart")}}>Cart</Button>
    </Card.Footer>
      </Card>                     
 </div>
 )                     
}