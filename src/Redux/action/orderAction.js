 import axios from "axios";
 export const getAllorders=()=>async(dispatch)=>{
     dispatch({type:"loadingOr",payload:{orders:[],loading:true,error:""},});
     try{
    const {data}= await axios.get("http://kzico.runflare.run/order/", {
       headers: {
         authorization:
           `Bearer ${localStorage.getItem("token")}`,
       },
     })
       dispatch({type:"succesOr",payload:{orders:[...data],loading:false,error:""},});
     }catch(error){
       dispatch({type:"filedOr",payload:{orders:[],loading:false,error:error.message},});
     }
   }
   export const getOneOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:"loadingOne",payload:{Order:{},loading:true,error:""},});
    try{
    const {data}=await axios.get(`http://kzico.runflare.run/order/${orderId}`, {
      headers: {
        authorization:
          `Bearer ${localStorage.getItem('token')}`,
      },
    })
      dispatch({type:"succesOne",payload:{Order:{...data},loading:false,error:""},});
      
    console.log("ok",data)
    }catch(error){
      dispatch({type:"filedOne",payload:{Order:{},loading:false,error:error.message},});
  
    }
  }
