import React from "react";
import { ErrorMessage } from "formik";
import { useField } from "formik";
  import '../css/Sign.css';
  export const TextFiled=({label,...props})=>{
    const [field, meta]=useField(props);
    return(
      <div >
       
      <label htmlFor={field.name}>{label} </label>
      <input placeholder={`Enter ${field.name}`}
      className={`form-control  shadow-none ${meta.touched && meta.error && "is-invalid"} m-2`}   
     {...field} {...props}
      autoComplete="off"></input>
    <ErrorMessage component="div" className="error" name={field.name}/> 
  </div>
      )
  }




