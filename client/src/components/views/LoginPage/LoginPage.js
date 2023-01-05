import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/User_actions';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const onEmailHandler = (e) =>{
    setEmail(e.currentTarget.value)
  }

  const onPasswordHandler = (e)=>{
    setPassword(e.currentTarget.value)
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault(); // remove page refresh 

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(res => {
      if (res.payload.loginSuccess){
        //console.log(res.payload)
        navigate('/'); // root page 
      }else{
        alert("Error");
      }
    })
    
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width:'100%', height: '100vh'
    }}>
      <form style={{display: 'flex',flexDirection: 'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
