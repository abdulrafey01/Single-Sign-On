import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Data({isLogin, setisLogin ,socket}) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLogin){
      navigate('/')
    }
    console.log(isLogin)
  },[isLogin, navigate]) 

  socket.on('userLoggedOut',()=>{
    setisLogin(false)
    navigate('/')
  })
  
  const handleCentralLogout = () => {
    const logoutUrl = 'http://localhost:3000/logout';
    const popup = window.open(logoutUrl, 'popup', 'width=400,height=600');
  }
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontStyle: "italic",
      }}
    >
      <h3>This is Protected Page 🔐</h3>
      <div>
       
      </div>
      <div>
      <button
        onClick={ handleCentralLogout }
          style={{
            margin: "10px",
            width: "300px",
            background: "#c74d86",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          LogOut from Central App
        </button>
      </div>
    </div>
  );
}
