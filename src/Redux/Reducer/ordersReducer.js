 export const Allorders=(state={orders:[],loading:false,error:""},{type,payload})=>{
     switch (type) {
         case "loadingOr":
      return payload;
        case "succesOr":
   return payload;
        case "filedOr":
     return payload;
         default:
             return state;
     }
 }
 export const Oneorder=(state={Order:[],loading:false,error:""},{type,payload})=>{
    switch (type) {
        case "loadingOne":
            return payload;
        case "succesOne":
             return payload;
             
        case "filedOne":
            return payload;    
        default:
            return state;
    }
}