// //(تمرین 2تا 2تا زیاد کردن با دکمه)(روش1)
// import React, { useState } from "react";
// function App() { 
// const [number,setnum]=useState(0);
// const change=(x)=>{
//    setnum((prev)=>prev+x)
// }

import { First } from "react-bootstrap/esm/PageItem"




//   return(
//     <div>
//       <p>{number}</p>
//       <button onClick={()=>change(+2)}>+2</button>
//       <button onClick={()=>change(-2)}>-2</button>
//       <button onClick={()=>change(+4)}>+4</button>
//       <button onClick={()=>change(-4)}>-4</button>

//     </div>
//   );
// }
// export default App;
//*********************************************** */ (روش 2)
//import React, { useState } from "react";
// function App() { 
//     const [number,setnum]=useState(0);
//     const plus2=()=>{
//         setnum(number+2)}
//     const minuse2=()=>{
//         setnum(number-2)}
//     const plus4=()=>{
//         setnum(number+4)}
//     const minuse4=()=>{
//         setnum(number-4)}    
    
//       return(
//         <div>
//           <p>{number}</p>
//           <button onClick={plus2}>+2</button>
//           <button onClick={minuse2}>-2</button>
//           <button onClick={plus4}>+4</button>
//           <button onClick={minuse4}>-4</button>
    

//         </div>
//       );
//     }
//     export default App;
//************************************************************ */(دکمه x پاک کردن متن input)
// import React, { useState } from "react";
// function App() { 
//   const [text,chtext]=useState("");
//   const delet=()=>{
//     chtext("");
    
//   }
//     return(
//       <div>
//  <input onChange={(e)=>chtext(e.target.value)} value={text}/>
//   <p>{text}
     // {text.length ?<button type="submit" onClick={delet}>x</button> : ""}        (اگر متنی نوشته شد نشون بده)
      //</p>
//       </div>
//     );
//   }
//   export default App;
// ///****************************************************** */              ( style ,classname)
// import React from "react";
//  import style from"./Card.module.css";
// const Text=()=>{

//     return(
// <div className={style.t}>text</div>
//         )
//     }
// export default Text;
// /???????????????????????????????
// import React from "react";
// import "./Card.module.css";
//  import Style from "./Card.module.css"
// function App() { 
  
//     return(
//       <div className="App">     
//       <p className={`${Style.t} ${Style.bg}`}>app</p>
//       </div>
//     );
//   }
//   export default App;
// *********************************(دکمه عدد زیاد شه)
//                                                                  (app.js)
// /import React, { useState } from "react";
// import "./App.css";
// import First from "./First";
// import Secend from "./Secend";
// function App(){
//   const [number,setNum]=useState(0);

//   return(
//     <div className="App">
//        <First num={number}/>
//       <Secend set={setNum}/>
//     </div>
  
  
//   );
// }
// export default App;/(app.js)
//                                                           (first.js)
// import React from "react";
// const First=(props)=>{
  
//     return(
//         <div>{props.num}
//         </div>
//     )
// }
// export default First;
//                                                           (secend.js)
// import React from "react";
// const Secend=(props)=>{
//     return(
//         <div>
//             <button onClick={()=>props.set((last)=>last+1)}>plus</button>
//             </div>
//     )
// }
// export default Secend;
//********************************************** */            ( fetchوصل شدن به API)

// export default function App(){
//       const getData=async()=>{
//        try{
//          const response = await fetch("https://jsonplaceholder.typicode.com/users")  ( api fake ازjsonplaceholder)
//          const data=  await response.json()
//        console.log(data);
//        }catch(error){
//          console.log(error)
//        }
//       }
//         return(
//          <div>
//          <button variant="succses" onClick={()=>getData()}>getData</button>
//          </div>
//        )
//      }
///???????????????????????????????????????????????????(با axios)
// function App(){
//       const [users,setuser]=useState([]);
//        const [error,seterror]=usState("");
//        const getData=async()=>{
//         try{
//        const {data}= await axios("https://jsonplaceholder.typicode.com/users")
//        console.log(data)
//         setuser(data);
//         }catch(error){
//           seterror(error.message)
      
//         }
//        }
//          return(
//           <div className="App">
//           <Button variant="info" onClick={()=>getData()}>getData</Button>
//            {users.map((item) => {
//           return <p key={item.id} style={{color: item.id%2? "red":"blue"}}>{item.email}</p> 
//           })}
//         <p>{error}</p>
//           </div>
//         )
//       }
//       export default App;
///************************************************************8 */(تست email value دریافت اطلاعاتی که کاربر میده)
// function App(){
//       const [email,setEmail]=useState({
//         value:"",
//         isTouch:false,
//         error:"email isnot valid",
//       })
//       console.log(email.value)
//          return(
//           <div className="App">
//           <form onSubmit={(e)=>e.preventDefault()}>
//             <label htmlFor="username">username:</label>
//             <input type="text" placeholder="enter username" id="username" />
//             <br/>
//             <label htmlFor="email">email:</label>
//             <input type="email" placeholder="enter email" id="email" onChange={(e)=>setEmail((last)=>{
//               const help={...last}
//               help.value=e.target.value
//               return ({...help})
//             })} />
//             <br/>
//             <label htmlFor="password">password:</label>
//             <input type="password" placeholder="enter password" id="password"  /> 
//             <br/>
//             <button type="submit">submit</button>
//           </form>
//           </div>
//         )
//       }
//       export default App;
//****************************************** */ (تمرین email password)
// function App(){
// const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// const [email,setEmail]=useState({
//   value:"",
//   isTouch:false,
//   error:"email isnot valid",

// })
//    return(
//     <div className="App">
//     <form onSubmit={(e)=>e.preventDefault()}>
//       <label htmlFor="username">username:</label>
//       <input type="text" placeholder="enter username" id="username" />
//       <br/>
//       <label htmlFor="email">email:</label>
//       <input type="email" placeholder="enter email" id="email" 
//       onChange={(e)=>setEmail((last)=>{
//         const help={...last}
//         help.value=e.target.value
//         return ({...help})

//       })
//     } 
//     onBlur={(e)=>setEmail((last)=>{
//       const help={...last}
//       help.isTouch=true;
//       return ({...help})

//     })}
//     onFocus={(e)=>setEmail((last)=>{
//       const help={...last}
//       help.isTouch=false;
//       return {...help}
//     })}
//   />
//   {email.isTouch && !emailRegex.test(email.value) &&<small>"email is not defind"</small>}
//       <br/>
//       <label htmlFor="password">password:</label>
//       <input type="password" placeholder="enter password" id="password"  onchange={(e)=>{e.target.value}} 
//          
//       }
//      
//       />
//       <br/>
//       <button type="submit">submit</button>
//     </form>
//     </div>
//   )
// }
// export default App;
///********************************/  (validate password va email)  ???? چجوری result o ro page neshon bedam

// import React, { useState } from 'react';
// import * as yup from 'yup';
// import "./App.css";
// function App(){
//   const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//   const[pass,setpass]=useState({ value:""});
//   const passValidate=yup.object().shape({
//     value:yup
//     .string()
//     .min(8,"Password must be more than 8 characters")
//     .matches(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"match nis")

//   })
//   const [email,setEmail]=useState({
//     value:"",
//     isTouch:false,
//     error:"email isnot valid",
//   })
//      return(
//       <div className="App">
//       <form noValidate onSubmit={async(e)=>{e.preventDefault();
//       try{
//         const result=await passValidate.validate(pass);
//         console.log(result)

//       }catch(error){
//         console.log(error)
//       }}
//       }>
//         <label htmlFor="username">username:</label>
//         <input type="text" placeholder="enter username" id="username" />
//         <br/>
//         <label htmlFor="email">email:</label>
//         <input type="email" placeholder="enter email" id="email" 
//         onChange={(e)=>setEmail((last)=>{
//           const help={...last}
//           help.value=e.target.value
//           return ({...help})
//         })
//       } 
//       onBlur={(e)=>setEmail((last)=>{
//         const help={...last}
//         help.isTouch=true;
//         return ({...help})
//       })}
//       onFocus={(e)=>setEmail((last)=>{
//         const help={...last}
//         help.isTouch=false;
//         return {...help}
//       })}
//     />
//     {email.isTouch && !emailRegex.test(email.value) &&<small>"email is not defind"</small>}
//         <br/>
//         <label htmlFor="password">password:</label>
//         <input type="password" placeholder="enter password" id="password"  onChange={(e)=>setpass({value:e.target.value})
// }
//         /> 
//         <br/>
//         <button type="submit">submit</button>
//       </form>
  
//       </div>
//     )
//   }
//   export default App;
//******************************** *(تمرین  button don undone green red)

// import React, { useState } from 'react';

// import "./App.css";
// function App(){
//   const[todos,settodo]=useState([])
//   const[text,settext]=useState("")
//   const addtodo=()=>{
//     if(text.trim()){
//     settodo((last)=>{
//       const help=[...last,{key:text, status:false}]; //(object داخل ارایه برای تغییر رنگ متن با زدن دکمه done)
//       return [...help]
//     })
//      settext("") //((برای پاک کردن متن داخل input بعد زدن دکمه)
//   }}
//   const removetodo=(index)=>{ //(baraye pak kardan item ba dokme x)
//     settodo((last)=>{
//     const help=[...last];
//     help.splice(index, 1);
//     return [...help]})
//   }
//   const changeStatus=(index)=>{ //( button done undone for change color)
//     settodo((last)=>{
//     const help =[...last];
//      help[index].status=!help[index].status //(ّبرای دکمه done undone تغییر کنه)
//     return [...help];
//     })
//   }
//   return(
//  <div className='App'>
//   <form onSubmit={(e)=> e.preventDefault()}>
//     <input value={text}//(for delete input value)
//      type="text" onChange={(e)=>settext(e.target.value)}/>
//     <button onClick={addtodo}>add</button>
//   </form>
//  {todos.map((item,index)=>(
//    <div key={index}>
//     <span style={{color:item.status?"green":"red"}}>
//     {item.key} 
//     </span>
//     <button onClick={()=>changeStatus(index)}>{item.status ?"undone":"done"}</button>
//     <span onClick={()=>removetodo(index)}>x</span>
    
//     </div>
//     ))}
//    </div>
// )
//   }

//   export default App;
//********************************* * /(تمرین done undone ba /bootstrap/sweetlert2)

// import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { CloseButton, Col, Container, Row,Card,Button,Form, } from 'react-bootstrap';
// function App(){
//   const[todos,settodo]=useState([]);
//   const[text,settext]=useState("");
//   const addtodo=()=>{
//     if(text.trim()){
//     settodo((last)=>[...last,{key:text, status:false}])
// toast(`${todos.length+1} ${text} added`,{
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light", 
//   });
//     }
//      settext("") //((برای پاک کردن متن داخل input بعد زدن دکمه)
//   };
//   const removetodo=(index)=>{ //(baraye pak kardan item ba dokme x)
// Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//     settodo((last)=>{
//     const help=[...last];
//     help.splice(index, 1);
//     return [...help]})
//     Swal.fire(
//       'Deleted!',
//       `${todos[index].key} has been deleted!`,
//       'success'
//     )
//   }
  
//   })
  
// }

//   const changeStatus=(index)=>{ //( button done undone for change color)
//     settodo((last)=>{
//     const help =JSON.parse(JSON.stringify(last));
//      help[index].status=!help[index].status //(ّبرای دکمه done undone تغییر کنه)
//     return [...help];
//     })
//   };
//   return(
//  <div className='App'>
//<ToastContainer/>
//    <Form onSubmit={(e)=>e.preventDefault()}  className="py-5 x-1">
//    <Container className='mt-4'>
//      <Row>
//        <Col xs={{span:"6",offset:"2"}} >
//          <Form.Group  className="mb-3" controlId="formPlaintextPassword">
//           <Form.Control 
  //            value={text}
//           type="text"
//            placeholder="text"  
//            onChange={(e)=>settext(e.target.value)}
//            />
//          </Form.Group>
//        </Col>
//        <Col xs="2"  >
//         <Button variant="dark" onClick={addtodo} type="submit" >add</Button>
//         </Col>
//       </Row>
//       </Container>
//     </Form>
//   <Container className='mt-6'>
//  {todos.map((item,index)=>( 
//   <Row key={index}>
//   <Col xs={{span:"4",offset:"4"}}>
//  <Card
//   bg={item.status ? "success": "danger"}
//   className="mb-4 p-2"
//    >
// <Card.Body style={{display:"flex",flexDirection:"column"}}> 
//   <Container >
//     <Row>
//        <Col xs={{span:"2",offset:"10"}}>
//         <CloseButton  variant='white' onClick={()=>removetodo(index)}/>
//        </Col>
//     </Row>
//   </Container>
//   <Card.Text>
//         {item.key}
//   </Card.Text>
//     <Button  onClick={()=>changeStatus(index)} variant={item.status ?"danger":"success"}>{item.status ?"undone":"done"}</Button>
// </Card.Body>
//   </Card>
//   </Col>
//  </Row>
//     ))}
//      </Container> 
//   </div>
// )}

//   export default App;
//********************************************************** */(تمرین getdata user/error/loading (toast/badge) با دکمه)
// (تمرین قبلی با usEfect بدون دکمه)

// import React, { useState } from 'react';
// import "./App.css";
// import axios from 'axios';
// import { Badge} from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function App(){
// const [user,setuser]=useState([]);
// const [loading,setloading]=useState(false);
// const [error,seterror]=useState("");
// const getdata=async()=>{
//     setloading(true)
//   try {
//   const {data}=await axios("https://jsonplaceholder.typicode.com/users");
//     setuser(data);
//     setloading(false);
//   } catch (error) {
//    seterror(error.message);
//     setloading(false)
//     toast(`${error.message}`, {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       type:"error"
//       }); 
//      }
// };
// useEffect(()=>{       ///(برای بدون دکمه بالا اوردن این قیمت اضافه شده)
//       getdata();
//     },[]);

// return(
//   <div className='App'>
// <ToastContainer/>
//   {loading ? (<span class="loader"></span>):user.length ?( <>
//   {user.map((item)=>(
//      <Card className="text-center">
//      <Card.Body>
//        <Card.Title>{item.username}</Card.Title>
//        <Card.Text>
//      {item.address.street}
//        </Card.Text>
//      </Card.Body>
//    </Card>
//     ))}

//   </>
// ):(
//   <div >
//   <button  className='button-91' type='submit' onClick={getdata}>getdata</button> //(برای usefect این قسمت حذف شده)
//    <p style={{fontSize:"30px",marginTop:"30px"}}>
    
//       {error &&  <Badge bg="info">{error}</Badge>}
//    </p>
    
//       </div>
// )}
// </div>

// )
//  }

//   export default App;
//////////////////////////////////????????????????????????????? (تمرین start prev)


// function App(){
//       const [number1,setnum1]=useState(0);
//        const setnum=()=>{
//         setInterval(() => {
  //setnum1((last)=>last+1)
          
//         }, 2000))
//       }
      
//       return( <div>
//         <p>{number1}</p>
//         <button onClick={setnum}>click</button>
        
//       </div>)
//       }
//***********************************/(search coins )

// import React, { useState, useEffect} from 'react';
// import "./App.css";
// import axios from 'axios';
// import { Badge} from 'react-bootstrap';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// function App(){
// const [coins,setcoins]=useState([]);
// const [loading,setloading]=useState(false);
// const [error,seterror]=useState("");
// const [search,setsearch]=useState("");
// const getdata=async()=>{
//     setloading(true)
//   try {
//   const {data}=await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
//     setcoins(data);
//     setloading(false);
//   } catch (error) {
//    seterror(error.message);
//    setloading(false)
    
//      }
// };
//  useEffect(()=>{      
//       getdata();
//     },[]);
// console.log(coins)
// return(
//   <div className='App'>
// {/* //<ToastContainer/> */}
//   {loading ? (<span class="loader"></span>):coins.length ?( 
//   <div  >
//    <input onChange={(e)=>setsearch(e.target.value)} style={{marginBottom:"75px"}}/>
//   {coins.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>(
//      <div key={item.id}  style={{display:"grid",gridTemplateColumns:"repeat(5,15rem)",border:"3px solid pink",alignItems:"center",justifyContent:"center",justifyItems:"center",backgroundColor:"lightBlue"}}>
//        <img src={item.image} style={{width:"60px",height:"60px"}}/>
//        <p>{item.name}</p> 
//        <p>{item.symbol}</p>
//        <p>{item.current_price}</p>
//        <p>{item.market_cap}</p>
//      </div>
//     ))}
//   </div>
// ):(
//   <div >
//    <p style={{fontSize:"30px",marginTop:"30px"}}>
//       {error &&  <Badge bg="info">{error}</Badge>}
//    </p>
//       </div>
// )}
// </div>
// )
//  }

//   export default App;
////**************************************(کامل پیج coins /pagintaion/scroll/usemoment/useefect/useref/sort)
 

// import React, { useState, useEffect, useRef, useMemo} from 'react';
// import "./App.css";
// import axios from 'axios';
// import { Badge} from 'react-bootstrap';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Pagination from 'react-bootstrap/Pagination';

// function App(){
// const [coins,setcoins]=useState([]);
// const [loading,setloading]=useState(false);
// const [error,seterror]=useState("");
// const [search,setsearch]=useState("");
// const [Sort,setsort]=useState("");
// const [paginate,setpaginate]=useState([]);
// const [page,setpage]=useState("1");
// const scroll=useRef();

// const getdata=async()=>{
//  setloading(true)
//   try {
//   const {data}=await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
//     setcoins(data);
//     setloading(false);
  
//       const help=[];
//      for(let i=1;i<=Math.ceil(data.length/10);i++){
//       help.push(i)
//      }
//      setpaginate(help);
    
//   } catch (error) {
//    seterror(error.message);
//  setloading(false)
    
//      }
// };
//  useEffect(()=>{      
//   getdata();
//  },[]);
//  useEffect(()=>{
// window.scrollTo({top: scroll.current?.offsetTop-20,behavior:"smooth"})
//  },[page])
//  const show=useMemo(()=>{
//    return coins.slice((page-1)*10,page*10)
//  },[page,coins])

// return(
//   <div className='App'>
//   {loading ? (<span className="loader"></span>):coins.length ?( 
//     <div  >
//     <input  onChange={(e)=>setsearch(e.target.value)} style={{marginBottom:"75px", width:"300px"}}/>
//    <select style={{border:"1px solid orange",backgroundColor:"orange",padding:"2px"}} onChange={(e)=>setsort(e.target.value)}>
//      <option value="mc">market_cap</option>
//      <option value="lowest">lowest</option>
//      <option value="highest">highest</option>
//      <option value="A-Z">A-Z</option>
//      <option value="Z-A">Z-A</option>
//    </select>
//    <div ref={scroll}>
//   {show
//    .filter((item)=>item.name.toLowerCase().includes(search))
 
//   .sort((x,y)=>{
//    switch(Sort){
//      case "lowest":
//        return x.current_price - y.current_price;
//      case "highest":
//        return y.current_price -x.current_price;
//      case "A-Z":
//        return x.name.localeCompare(y.name);
//      case "Z-A":
//        return y.name.localeCompare(x.name);
//      default:
//        return x.current_cap_rank - y.current_cap_rank
//    }
//   })
//   .map((item)=>(
//      <div  key={item.id}  style={{display:"grid",gridTemplateColumns:"repeat(5,15rem)",border:"5px solid grey",borderRadius:"20px",alignItems:"center",justifyContent:"center",justifyItems:"center",backgroundColor:"silver",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px"}}>
//        <img src={item.image} style={{width:"60px",height:"60px"}}/>
//        <p>{item.name}</p> 
//        <p>{item.symbol}</p>
//        <p>{item.current_price}</p>
//        <p>{item.market_cap}</p>
//      </div>
//     ))}
//   </div>
//   </div>
// ):(
//   <div >
//    <p style={{fontSize:"30px",marginTop:"30px"}}>
//       {error &&  <Badge bg="info">{error}</Badge>}
//    </p>
//       </div>
// )}
// <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
// <Pagination>
//      <Pagination.First onClick={()=>setpage(1)}/>
//      <Pagination.Prev onClick={()=>{
//        if(page>1){
//        setpage((last)=>last-1)}}}/>
   
//      {paginate.map((item)=>(
//      <Pagination.Item key={item} active={page===item} //(برای روی دکمه صفحه بودی با ابی تبره تر نشون بده)
//       onClick={()=>setpage(item)}
//      >{item}</Pagination.Item>
//      ))}
   
//      <Pagination.Next  onClick={()=>{
//        if(page<paginate.length){
//        setpage((last)=>last+1)}}}/>
//      <Pagination.Last  onClick={()=>setpage(paginate.length)}/>
//    </Pagination>
//  </div>
// </div>
// )
//  }

//   export default App;
      //******************************************* */(تمریت تایمر )
      //(app.js)
      
//  import React, { useState , useEffect } from 'react';
//  import First from './component.js/First';
//  import Secend from './component.js/Secend';
//  import Third from './component.js/Third';
//  import"./App.css";
//  import { Container, Row } from 'react-bootstrap';
//  function App(){
//  const [timer1,settimer1]=useState(true);
//  const [timer2,settimer2]=useState(false);
//  const [timer3,settimer3]=useState(false);
//  const [num1,setnum1]=useState(0);
//  const [num2,setnum2]=useState(0);
//  const [num3,setnum3]=useState(0);
//  useEffect(()=>{
//    let time=null;
//    if(timer1){
//    time=setInterval(()=>{
//    setnum1((last)=>last+1)
//    },500)};
//    if(timer2){
//    time=setInterval(()=>{
//    setnum2((last)=>last+1)
//    },500)};
//    if(timer3){
//    time=setInterval(()=>{
//    setnum3((last)=>last+1)
//    },500)};       
//    return ()=> clearInterval(time)
   
//  },[timer1,timer2,timer3]);
 
//    return(
//  <div className='App'>
//    <Container>
//     <Row>
//      <First timer1={timer1} settimer1={settimer1} settimer2={settimer2} num1={num1}/>
//      <Secend timer2={timer2} settimer1={settimer1} settimer2={settimer2}  settimer3={settimer3} num2={num2}/>
//      <Third timer3={timer3} settimer3={settimer3} settimer2={settimer2} num3={num3}/>
//     </Row>
//    </Container>
//  </div>
//    )
   
//    }
 
//     export default App;
//     //(first.js)
    
//  import React from 'react';
//  import { Col } from 'react-bootstrap';
//   function First({timer1,settimer1,settimer2,num1}){
//    return(
     
//        <Col>
         
         
//        <p>
 
//        {num1}
//        </p>
//        <button onClick={()=>{
//          if(timer1){
//            settimer1(false);settimer2(true)}
//            }}
//            >
//              Next</button>
 
//      </Col>
     
//    )
//   }
//   export default First;
// (secend, Third)=> مثل First.js
//////////////
// //const onSubmit=()=>{
//   console.log("submitted");
// }
//  export const SignUp=()=>{
//   const passwordRule= /^[a-zA-Z0-9!@#$%^&*]{8}$/;
//   const YupSchema=yup.object().shape({
//     email:yup.string().email("please enter valid email").required("Requaired"),
//     username:yup.string().required("Requaired"),
//     password:yup
//     .string()
//     .min(8)
//     .matches(passwordRule,{message:"password should contain atleast one number and one special character"})
//     .required("Requaired"),
//     ConfrimPassword:yup
//     .string()
//     .oneOf([yup.ref("password"),null],"password must match")
//     .required("Requaired"),
// })
// const {values, errors,handleBlur,handleChange,handleSubmit}=useFormik({
//   initialValues:{
//     username:"",
//     email:"",
//     password:"",
//     ConfirmPassword:""
//   }, 
//   validateYupSchema: YupSchema,
//   onSubmit,
// });
// console.log(errors)
//     return (
//       <div>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <Card className="px-4">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2 text-center text-uppercase ">
//                     sign up
//                   </h2>
//                   <div className="mb-3">
//                     <Form   onSubmit={handleSubmit} >
//                       <Form.Group className="mb-3" >
//                         <Form.Label className="text-center">username</Form.Label>
//                         <Form.Control 
                      
//                       value={values.username}
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                         id="username" 
//                         type="text" 
//                         placeholder="Enter your username"/>
//                       </Form.Group>

//                       <Form.Group className="mb-3">
//                         <Form.Label className="text-center">
//                           Email address
//                         </Form.Label>
//                         <Form.Control value={values.email}
//                          onChange={handleChange}
//                          onBlur={handleBlur}
//                          id="email" 
//                          type="email" 
//                          placeholder="Enter your email" />
//                       </Form.Group>

//                       <Form.Group className="mb-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control 
//                         value={values.password}
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                         id="password" 
//                         type="password" 
//                         placeholder="Enter your password" />
//                       </Form.Group>
//                       <Form.Group className="mb-3" >
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control  value={values.ConfirmPassword}
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                         id="confrimPassword" 
//                         type="password" 
//                         placeholder="Enter your confrim password" />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       ></Form.Group>
//                       <div className="d-grid">
//                         <Button variant="primary" type="submit">
//                           Create Account
//                         </Button>
//                       </div>
//                     </Form>
//                     <div className="mt-3">
//                       <p className="mb-0  text-center">
//                         Already have an account??{' '}
//                         <a href="{''}" className="text-primary fw-bold">
//                           Sign In
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//       )
//     }
  
  /////////////////
  // <Container>
  //               <Row>
  //       {data.map((item)=>{
  //           <>
  //           return(
  //               <Card >
  //                <Card.Body >
  //                   <Container>
  //                       <Row>
  //                    <Col style={{padding:"100px"}}>
  //                  <Card.Img  src={item.image} alt={`${item.category} ${item.brand} ${item.color}`} className="Card-img " style={{width:"200px",height:"260px"}}/>
  //                  </Col>
  //                  <Col style={{textAlign:"left",paddingTop:"130px"}} >
  //                <Card.Title> {item.name}</Card.Title>
  //                <Card.Text><p>brand:{item.brand}</p>
  //               <br/>
  //               <p>color:{item.color}</p><br/>
  //               <p>Price: {item.price} $</p><br/>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 25 25" id="IconChangeColor"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" id="mainIconPathAttribute" fill="yellow" strokeWidth="0.3" stroke="#ff8800"></path> </svg> 
  //               rating :{item.rating}
  //               </Card.Text>
  //               </Col> 
                
  //                       </Row>
  //                   </Container>
  //                </Card.Body>
  //                <Card.Footer className="mb-2 mx-2">
  //                 <Container >
  //                  <Row>
  //                      <Col style={{textAlign:"right"}}>
  //                      <Button>add to Cart</Button>
  //                      </Col>
  //                  </Row>
  //                 </Container>
  //                </Card.Footer>
  //                </Card>
  //              )
  //                </>
  //           })}
  //           </Row>
  //       </Container>
////////////////////////////
{/* <div>

 
<div>
  
<div  style={{border:"1px solid green" , backgroundColor:"rgba(239, 247, 240, 0.973)",margin:"60px"}} >
  <Container style={{borderBottom:"1px solid gray",padding:"10px"}}>
    <Row>
   
      <Col md={2} >
      Image
      </Col>
      <Col md={2} >
      Product Name
      </Col>
      <Col md={2} >
      Brand
      </Col>
      <Col md={2} >
      color
      </Col>
      <Col md={2} >
      Category
      </Col>
      <Col md={1} >
      Quantity
      </Col>
      <Col md={1} >
      Price
      </Col>
    </Row>
  </Container>
  

{ orders && orders.map((item)=>{
  return(
    <Container style={{borderBottom:"1px solid green",padding:"20px"}}>
      <Row>
        <Col style={{height:"100px"}} md={2} >
      <img src={item.product.image} style={{width:"100px",height:"100px"}}/> 
        </Col>
      <Col md={3} >
      {item.product.name}
      </Col>
      <Col md={1} >
        {item.product.brand}
      </Col>
      <Col md={1} >
        {item.product.color}
      </Col>
      <Col md={1} >
        {item.product.category}
      </Col>
      <Col md={1} >
        {OneOrder.qty}
      </Col>
      <Col md={1} >
      {item.product.price}
      </Col>
      </Row>
    </Container>
    
  )
})}
    <Container  style={{borderBottom:"1pcx solid red"}}>
      <Row>
<Col md={4}>

    <p style={{textAlign:"left"}}>
     Total Price: {orders.totalPrice} $
    </p>
</Col>
<Col md={4}>
<button className="btn my-2 w-50" onClick={()=>{navigate(`/orders/${orders._id.toString()}`)}}>
  info
</button>
</Col>
<Col md={4}>
    <p style={{textAlign:"right"}}>
      PaymentMethod:{orders.paymentMethod}
    </p>
</Col>
      </Row>
    
    </Container>
     
      </div>

  </div>
  </div> */}