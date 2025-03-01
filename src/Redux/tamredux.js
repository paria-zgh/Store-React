//                                                      (تمرین دکمه و زیاد شدن عدد)     
//                                                      (app.js)
// function App(){
//     const dispatch=useDispatch();
//     const { number }=useSelector(state=>state);
  
//    return (
//     <div className='App'>
//       <h1  className='mt-4'>
//        <Badge bg='danger'>{number}</Badge>
//       </h1>
//        <Button variant='info' onClick={()=>dispatch({type:"changenumber",payload:+2})}>+2</Button>
//        <Button variant='info' onClick={()=>dispatch({type:"changenumber",payload:+10})}>+10</Button>
//        <Button variant='info' onClick={()=>dispatch({type:"changenumber",payload:-10})}>-10</Button>
//        <Button variant='info' onClick={()=>dispatch({type:"changenumber",payload:-2})}>-2</Button>
//     </div>
//    )
   
    
//     }
  
//      export default App;
//                                                   (or with action)
// const number=useSelector(state=>state.number);
// <Button variant='info' onClick={()=>dispatch(changenumber(+2))}>+2</Button>
// <Button variant='info' onClick={()=>dispatch(changenumber(+10))}>+10</Button>
// <Button variant='info' onClick={()=>dispatch(changenumber(-10))}>-10</Button>
// <Button variant='info' onClick={()=>dispatch(changenumber(-2))}>-2</Button>
//       //////?????????????????????????????????????
//                                                           (store.js)
//      import { legacy_createStore, combineReducers,applyMiddleware } from "redux";
// import { number } from "./reducer";
// const reducer=combineReducers({number});
// const store=legacy_createStore(reducer);
// export default store;
     //                                                  (or with action)
    //  const middleware=[thunk];
    //  const store=legacy_createStore(reducer,applyMiddleware(...middleware));
// ///8???????????????????????????????????????
//                                                           (reducer.js)
// export const number=(state=0,{type,payload})=>{
//   switch (type) {
//     case "changenumber":
//      return state+payload;
//     default:
//       return state;
//    }
// }
////                                                       (or with action)
// export const posts=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loading":
//      return payload;
//        case "succes":
//   return payload;
//        case "failed":
//   return payload;
//         default:
//             return state;
//     }
////////////////////////////////
<Card style={{width: '18rem' }}>
<Card.Body>
<Card.Title>{item.name}</Card.Title>
<Card.Text>{<p>{item.countInStock} available</p>}</Card.Text> 

{/* <Button variant="dark"  >post</Button> */}
</Card.Body>
</Card>


// }
            //   (or)
// // if(action.type=="plus2"){
// //     return state+2
// // }
// // if(action.type=="plus10"){
// //     return state+10;
// // }
// // if(action.type=="mines10"){
// //     return state-10
// // }
// // if(action.type=="mines2"){
// //     return state-2
// // }
// // return ( state
// // )
/////********************************* *             /(action.js)
// import axios from "axios"
// export const changenumber=(counter)=>(dispatch,getstate)=>{
//     dispatch({type:"change",payload:getstate().number+counter})
//}
///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                                   (تمرین گرفتن دیتا و تغییر title با کلیک روس جمله)
 //                                                   (app.js)
 
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import"./App.css";
// import {  changetitle, getpost } from './Redux/action';
// function App(){
//   const dispatch=useDispatch();

//   const {data,loading,error}=useSelector(state=>state.posts);
//   const [select,setselect]=useState(0);
//   const[text,settext]=useState("");
//   useEffect(()=>{
//     // const data=JSON.parse(localStorage.getItem("post"));
//     // if(! data?.length){
//     dispatch(getpost())
// },[])

//   return(
//     <div className='App'>
//       {data.map((item,index)=>(
//       <div key={item.id}>
//         {select === item.id ?
//         <>
//         <input value={text} onChange={(e)=>settext(e.target.value)}/>
//         <button  type="button" onClick={()=>{setselect(0);dispatch(changetitle(index,text))}}>done</button>
//         </>: <p onClick={()=>{setselect(item.id);settext(item.title)}}>{item.title}</p>}
   
//       </div>))
//       }  
//       </div>)
// }

//    export default App;
//**************************************************************** */
//                                                            (store.js)
// import { legacy_createStore,combineReducers , applyMiddleware} from "redux";

// import thunk from "redux-thunk";
// import { posts } from "./reducer";
// const middleware=[thunk];
// // const post=JSON.parse(localStorage.getItem("posts"))?JSON.parse(localStorage.getItem("posts")):[];
// // const initialState={posts:{data:[...post],loading:false,error:""}};
// const reducer=combineReducers({posts});
// const store=legacy_createStore(reducer,applyMiddleware(...middleware));
// export default store;
//******************************************************
//                                                         (action.js) */
// import axios from "axios"

// export const getpost=()=>async(dispatch,getstate)=>{
//     dispatch({type:"loading",payload:{data:[],loading:true,error:""}})
//     try {
//         const{data}=await axios("https://jsonplaceholder.typicode.com/posts")
//         dispatch({type:"succes",payload:{data:[...data],loading:false,error:""}});
//         // localStorage.setItem("post",JSON.stringify(data))
//     } catch (error) {
//         dispatch({type:"failed",payload:{data:[],loading:false,error:error.message}})
//     }
// }

// export const changetitle=(index,text)=>(dispatch,getstate)=>{
//    const help=JSON.parse(JSON.stringify(getstate().posts.data));
// help[index].title=text;
// dispatch({type:"changetitle",payload:{data:[...help],loading:false,error:""}});
// // localStorage.setItem("post",JSON.stringify(help));
// };

// export default changetitle;
///********************************************************* */
//                                                          (reducer.js)
// export const posts=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loading":
//      return payload;
//        case "succes":
//   return payload;
//        case "failed":
//   return payload;
//   case "changetitle":
//     return payload;
//         default:
//             return state;
//     }
// }
/// ***************************************(post user route header)
//                                          (app.js)
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import"./App.css";
// import { Home } from "./pages/Home"
// import { Error } from './pages/Error';
// import { Users } from './pages/Users';
// import { Posts } from './pages/Posts';
// import { Comments } from './pages/Comments';
// import {Header} from "./components/Header"
// function App(){

//   return(
//     <div className='App'>


//      <Header/>
   
//       <Routes >
//         <Route  path="/" element={<Home/>}/>
//         <Route path='/Users' element={<Users/>} />
//         <Route path='/Posts' element={<Posts/>}/>
//         <Route path='/Users/:userId' element={<Posts/>}/>
//         <Route path='/Comments' element={<Comments/>}/>
//         <Route path='*' element={<Error/>}/>
//       </Routes>
//       </div>)
// }

//    export default App;
//                                              (header.js)
// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Container,Nav} from "react-bootstrap";
// export const Header=()=>{
//     return(
//      
//         <Navbar bg="light" expand="lg" className="mb-4">
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
            
//               <Nav.Link as={Link} to="/Posts">Posts</Nav.Link>
//               <Nav.Link as={Link} to="Comments">Comments</Nav.Link>
//               <Nav.Link as={Link} to="Users">Users</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       </div>
       
//     )
//}
//????????????????????????????????????????????????????????????
///                                                 (users.js)
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getusers } from "../Redux/action";
// import { Button,Card, Col, Container, Row } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';
// export const Users=()=>{
//     const {data,loading,error}=useSelector((state)=>state.users);
//     const dispatch=useDispatch();
//      useEffect(()=>{
//      dispatch(getusers());
//     },[])
//     console.log(data,loading,error)
//     return ( 
        
//         <div>
//             <Container>
//                 <Row>

//            {data.map((item)=>{
//                return(
//                     <Col  key={item.id} xs={6} md={4} className="mb-4">
//             <Card style={{ width: '18rem' }}>
//             <Card.Body>
//             <Card.Title>{item.username}</Card.Title>
//             <Card.Text>
//         {item.email}
//             </Card.Text>
//             <Button variant="dark">post</Button>
//             </Card.Body>
//             </Card>
//                  </Col>
//           )
//         })}
//         </Row>
//       </Container>
//            </div>
//     )
// }
// ?????????????????????????????????????????????????????????????
///                                      (action.js)
// import axios from "axios"

// export const getusers=()=>async(dispatch,getstate)=>{
//     dispatch({type:"loading",payload:{data:[],loading:"true",error:""}})
//     try {
//         const {data}=await axios("https://jsonplaceholder.typicode.com/users");
//         dispatch({type:"succes",payload:{data:[...data],loading:"false",error:""}});
//     } catch (error) {
//         dispatch({type:"error",payload:{data:[],loading:"false",error:error.message}})
        
//     }

// }
///??????????????????????????????????????????????????????????
//                                           (store.js)
// import { legacy_createStore,combineReducers , applyMiddleware} from "redux";

// import thunk from "redux-thunk";
// import { users } from "./reducer";
// const middleware=[thunk];
// // const post=JSON.parse(localStorage.getItem("posts"))?JSON.parse(localStorage.getItem("posts")):[];
// // const initialState={posts:{data:[...post],loading:false,error:""}};
// const reducer=combineReducers({users});
// const store=legacy_createStore(reducer,applyMiddleware(...middleware));
// export default store;
//   ???????????????????????????????????????????????/////////////////////////
//                                                        (reducer.js)

// export const users=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loading":
//      return payload;
//        case "succes":
//   return payload;
//        case "failed":
//     return payload;
//         default:
//             return state;
//     }


// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//                                                (تمرین post comment redux اخری)
//                                                    (action.js)
//                                                    import axios from "axios"

// export const getusers=(id)=>async(dispatch,getstate)=>{
//     dispatch({type:"loading",payload:{data:[],loading:"true",error:""}})
//     try {
//         const {data}=await axios(`https://jsonplaceholder.typicode.com/users/${id?id+"/posts":""}`);
//         dispatch({type:"succes",payload:{data:[...data],loading:"false",error:""}});
//     } catch (error) {
//         dispatch({type:"error",payload:{data:[],loading:"false",error:error.message}})
        
//     }

// }
// export const getcomments=(postId)=>async(dispatch)=>{
//     dispatch({type:"loadingCm",payload:{data:[],loading:"true",error:""}});
//     try {
//         const {data}=await axios(`https://jsonplaceholder.typicode.com/posts/${postId ? postId+"/comments":""}`);
//         dispatch({type:"succesCm",payload:{data:[...data],loading:"false",error:""}});
//     } catch (error) {
//         dispatch({type:"errorCm",payload:{data:[],loading:"false",error:error.message}})
        
//     }

// }
// ?????????????????????????????????????????????????????? 
 //                                                 (user.js)
//  import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getusers } from "../Redux/action";
// import { Button,Card, Col, Container, Row } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";
// export const Users=()=>{
//     const navigate=useNavigate();
//     const {data,loading,error}=useSelector((state)=>state.users);
//     const dispatch=useDispatch();
//      useEffect(()=>{
//      dispatch(getusers());
//     },[])
//     console.log(data,loading,error)
//     return ( 
        
// <div>
   
//     <Container>
//      <Row>
//     {data.map((item)=>{
//     return(
//            <Col  key={item.id} xs={6} md={4} className="mb-4">
//             <Card style={{width: '18rem' }}>
//             <Card.Body>
//             <Card.Title>{item.username}</Card.Title>
//             <Card.Text>
//              {item.email}
//             </Card.Text>
//             <Button variant="dark" onClick={()=>navigate(item.id.toString(),{state:item.name})} >post</Button>
//             </Card.Body>
//             </Card>
//            </Col>
//           )
//         })}
//      </Row>
//     </Container>
  
   
//  </div>
//     )
// }
// ////?????????????????????????????????????????????????????? 
// ///                                                post.js
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getusers } from "../Redux/action";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Card,Col, Container,Row,Button, Badge,Spinner } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const Posts=()=>{
//   const {state}=useLocation();
//     const {userId}=useParams();
//     const dispatch=useDispatch();
//     const {data,loading,error}=useSelector((state)=>state.users);
//     const navigate=useNavigate();
   
//     useEffect(()=>{
//      dispatch(getusers(userId));
//    },[]);
// console.log(data,loading,error);
//     return(
//    <>
//      {/* {loading ? (<p>loading...</p>):( */}
         
//             <h1>
//              {state}
//            </h1> 
//         <Container>
//         <Row>
//        {data.map((item)=>{
//          return(
//          <Col  key={item.id} xs={6} md={4} className="mb-6">
//                <Card style={{ width: '18rem',height:"350px" }}>
//                <Card.Body>
//                <Card.Title>{item.id}</Card.Title>
//                <Card.Text>
//                 {item.body}
//                </Card.Text>
//                </Card.Body>
//                <Button className="m-4" variant="dark"  onClick={()=>navigate(item.id.toString(),{state:item.id})}  >Comments</Button>
//                </Card>
//               </Col>
//              )
//             })}
//         </Row>
//        </Container>
//       </>     
       
//         // )}
        
//         )
      
// }
// ///??????????????????????????????????????????????????
// //                                                    (comment.js)
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getusers } from "../Redux/action";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Card,Col, Container,Row,Button, Badge,Spinner } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const Posts=()=>{
//   const {state}=useLocation();
//     const {userId}=useParams();
//     const dispatch=useDispatch();
//     const {data,loading,error}=useSelector((state)=>state.users);
//     const navigate=useNavigate();
   
//     useEffect(()=>{
//      dispatch(getusers(userId));
//    },[]);
// console.log(data,loading,error);
//     return(
//    <>
//      {/* {loading ? (<p>loading...</p>):( */}
         
//             <h1>
//              {state}
//            </h1> 
//         <Container>
//         <Row>
//        {data.map((item)=>{
//          return(
//          <Col  key={item.id} xs={6} md={4} className="mb-6">
//                <Card style={{ width: '18rem',height:"350px" }}>
//                <Card.Body>
//                <Card.Title>{item.id}</Card.Title>
//                <Card.Text>
//                 {item.body}
//                </Card.Text>
//                </Card.Body>
//                <Button className="m-4" variant="dark"  onClick={()=>navigate(item.id.toString(),{state:item.id})}  >Comments</Button>
//                </Card>
//               </Col>
//              )
//             })}
//         </Row>
//        </Container>
//       </>     
       
//         // )}
        
//         )
      
// }
// //?????????????????????????????????????????????????? 
// //                                                 (app.js)
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import"./App.css";
// import { Home } from "./pages/Home"
// import { Error } from './pages/Error';
// import { Users } from './pages/Users';
// import { Posts } from './pages/Posts';
// import { Comments } from './pages/Comments';
// import {Header} from "./components/Header"
// function App(){

//   return(
//     <div className='App'>


//      <Header/>
   
//       <Routes >
//         <Route  path="/" element={<Home/>}/>
//         <Route path='/Users' element={<Users/>} />
        
//         <Route path='/Users/:userId' element={<Posts/>}/>
//         <Route path='Users/:userId/:postId' element={<Comments/>}/>
//         <Route path='*' element={<Error/>}/>
//       </Routes>
//       </div>)
// }

//    export default App;
// ????????????????????????????????????????????????
//                                         (reducer.js)

// export const users=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loading":
//      return payload;
//        case "succes":
//   return payload;
//        case "failed":
//     return payload;
//         default:
//             return state;
//     }



// }
// export const Cm=(state={data:[],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loadingCm":
//      return payload;
//        case "succesCm":
//   return payload;
//        case "failedCm":
//     return payload;
//         default:
//             return state;
//     }


// }