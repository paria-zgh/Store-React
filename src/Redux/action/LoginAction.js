
import axios from "axios";
import Swal from "sweetalert2";
export const getUser=(values)=>async(dispatch)=>{
  dispatch({type:"succes",payload:{user:{},access:false,loading:true},});
  try {
    const user={
      email: values.Email,
      password:values.Password,
    }
    console.log(user)
    const {data}= await axios.post("http://kzico.runflare.run/user/login",user);
    localStorage.setItem('token',data.user.token);     
    localStorage.setItem("user",data.user.username);    
    dispatch({type:"succes",payload:{user:{...data},access:true,loading:false},});
    } catch (error) {
      dispatch({type:"succes",payload:{user:{},access:false,loading:false},});
      if(!error.response){      
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.message,
          text: "Checking the network cables, modem,and router",
          showConfirmButton: false,
          timer: 2000
        })
      }else{
         Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text:error.response.data.message,
          showConfirmButton: false,
          timer: 2000
        }) 
      }
    }
  }

  export const Logout=()=>async(dispatch)=>{  
    const logout=[];
    localStorage.setItem("user",logout);
    dispatch(
        {
            type:"logout",
            payload:logout,
           })
        };
        export const Expire=()=>async(dispatch)=>{  
          const logout=[];
          localStorage.setItem("user",logout);
          dispatch(
              {
                  type:"logout",
                  payload:logout,
                 })
              };