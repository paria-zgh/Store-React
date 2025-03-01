
export const product=(state={allprdct:[],loading:false,error:""},{type,payload})=>{
    switch (type) {
        case "loading":
     return payload;
       case "succes":
  return payload;
       case "filed":
    return payload;
        default:
            return state;
    }
}
export const OneProduct=(state={product:[],loading:false,error:""},{type,payload})=>{
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








//   const OneProduct=(state={product:[],loading:false,error:""},{type,payload})=>{
//      switch (type) {
//          case "loadingOne":
//       return payload;
//         case "succesOne":
//    return payload;
//         case "filedOne":
//      return payload;
//          default:
//              return state;
//      }
//  }
//  export {OneProduct};

//   export const Cart=(state={data:[],loading:false,error:""},{type,payload})=>{
//       switch (type) {
//           case "loadingCart":
//        return payload;
//          case "succesCart":
//     return payload;
//          case "filedCart":
//       return payload;
//           default:
//               return state;
//       }
//   }
// export const Persons=(state={data:[{}],loading:false,error:""},{type,payload})=>{
//     switch (type) {
//         case "loadingPersons":
//      return payload;
//        case "succesPersons":
//   return payload;
//        case "filedPersons":
//     return payload;
//         default:
//             return state;
//     }



// }
