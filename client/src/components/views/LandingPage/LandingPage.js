import React, {useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('/api/hello')
    .then(res => console.log(res.data))
  },[])

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(res => {
      if (res.data.success){
        navigate('/login'); 
      }
      else{
        alert("로그아웃 하는 데 실패했습니다.");
      }
     
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width:'100%', height: '100vh'
    }}>
      <button onClick = {onClickHandler}>로그아웃</button>
    </div>
  )
}

export default LandingPage
