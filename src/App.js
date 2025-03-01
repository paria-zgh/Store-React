import React from 'react';
import { Route, Routes} from 'react-router-dom';
import"./App.css";
import { Home } from "./pages/Home"
import { Error } from './pages/Error';
import {Header} from "./components/Header"
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { SignUp } from './pages/SignUp';
import { Shiping } from './pages/Shiping';
import { Chekout } from './pages/Chekout';
import { Orders } from './pages/Orders';
import { Setting } from './pages/Setting';
import { ChangePassword } from './components/ChangePassword';
import { UploadAvatar } from './components/UploadAvatar';
import { Profile } from './pages/Profile';
import { OneOrder } from './pages/OneOrder';
import { useSelector } from 'react-redux';
import { Footer } from './components/Footer';
function App(){
  const {access}=useSelector(state=>state.User);

  const acc=localStorage.getItem("access");
  return(
    <div className='App'  >
     <Header/>
      <Routes >  
        
          <Route  path="/" element={<Home />}/>
          <Route path='/product/:productId' element={<Product />}/> 
          <Route path='/cart' element={<Cart />}/> 
           {!acc&&(   
          <Route path='Login/signup' element={<SignUp/>}/>
            )} 
             {acc&&(   
          <Route path='/profile' element={<Profile/>}/>
            )} 
          {acc&&(   
         <Route path='/setting/changeProfile' element={<Setting/>}/>
            )} 
          {acc&&(   
        <Route path='/setting/changePassword' element={<ChangePassword/>}/>
            )}   
          {acc&&(   
        <Route path="/setting/uploadAvatar" element={<UploadAvatar/>}/>
            )}       
          {acc&&(   
        <Route path='/chekout' element={<Chekout/>}/>
            )} 
           {acc&&(   
        <Route path='/order' element={<Orders/>}/>
            )} 
          {acc&&(   
        <Route path="/order/:orderId" element={<OneOrder/>}/>
            )} 
         {acc&&(   
        <Route path='/address' element={<Shiping/>}/> 
            )}               
        <Route path='*' element={<Error/>}/>
          {!localStorage.getItem("access")&& (           
        <Route path="Login" element={<Login/>} />)}
     </Routes>
     <Footer/>
     
  </div>
    )
}
export default App; 