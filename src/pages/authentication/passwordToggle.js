import { useState } from "react";
export const usePwdToggle=()=>{
    const [pwdToggle,setPwdToggle]=useState({
        type:"password",
        className:"fa-eye-slash",
    });
    const pwdToggler=()=>{
        pwdToggle.type==="password"? setPwdToggle({type:"text",className:"fa-eye"}):setPwdToggle({type:"password",className:"fa-eye-slash"});
    }  
    return [pwdToggle,pwdToggler]; 
}