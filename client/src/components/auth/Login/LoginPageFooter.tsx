import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import React, { MouseEvent } from 'react';
import RedirectInfo from "../RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
interface ILoginPageFooter{ 
    isFormValid:boolean;
    handleLogin:(event:MouseEvent<HTMLButtonElement>)=>void;
  }

  const getFormNotValidMessage=()=>{
 return 'Enter correct e-mail address and password should contains between 6 and 12 charecters'
  }
  const getFormValidMessage=()=>{
    return 'Press to log in!'
  }

const LoginPageFooter:React.FC<ILoginPageFooter> = ({handleLogin,isFormValid}) => {
  const navigate=useNavigate()
  const handlePushToRegisterPage=()=>{
   navigate('/register')
  }
  return (
    <>
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
    <div>
        <CustomPrimaryButton label="Log in" addStyles={{marginTop:"30px"}} disabled={!isFormValid} onclick={handleLogin}/>
    </div>
    </Tooltip>
    <RedirectInfo text='Need an account' redirectText=' Create an account' additionalStyles={{marginTop:'5px'}} redirectHandler={handlePushToRegisterPage}  />
    </>
  )
}

export default LoginPageFooter