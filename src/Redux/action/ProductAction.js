import axios from "axios";
export const getAllproduct=()=>async(dispatch)=>{
    dispatch({type:"loading",payload:{allprdct:[],loading:true,error:""},});
    try {
      const {data}= await axios.get("http://kzico.runflare.run/product/") ;
      dispatch({type:"succes",payload:{allprdct:[...data],loading:false,error:""},});
    } catch (error) {
        dispatch({type:"filed",payload:{allprdct:[],loading:false,error:error.message},});
    }
  }
  export const getOneproduct=(prodcutId)=>async(dispatch)=>{
    dispatch({type:"loadingOne",payload:{product:{},loading:true,error:""},});
    try{
    const {data}=await axios.get(`http://kzico.runflare.run/product/${prodcutId}`);
      dispatch({type:"succesOne",payload:{product:{...data},loading:false,error:""},});
  
    }catch(error){
      dispatch({type:"filedOne",payload:{product:{},loading:false,error:error.message},});
    }
  }


