
 export const User=(state={user:[],access:false,loading:false},{type,payload})=>{
     switch (type) {
     
        case "succes":
   return payload;
   
         default:
             return state;
     }
    
 }
 export const LogOut=(state={out:[]},{type,payload})=>{
    switch (type) {
    
       case "logout":
  return payload;
  
        default:
            return state;
    }
   
}
export const expire=(state={out:[]},{type,payload})=>{
    switch (type) {   
       case "logout":
  return payload; 
        default:
            return state;
    }
   
}