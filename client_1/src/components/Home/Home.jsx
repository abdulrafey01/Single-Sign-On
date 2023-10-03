import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({isLogin, socket, setisLogin}) {
 const navigate = useNavigate()

  useEffect(() => {
    if(isLogin){
      navigate('/data')
    }
    console.log(isLogin)
  }, [isLogin, navigate]);

  socket.on("userLoggedIn", () => {
    setisLogin(true)
    navigate('/data')
  });
  
  const handleSso = () => {
    const loginUrl = "http://localhost:3000/welcome";
    const left = (window.innerWidth - 100) / 2;
    const top = (window.innerHeight - 100) / 2;
    const popup = window.open(
      loginUrl,
      "popup",
      `width=400,height=600,left=${left},top=${top}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3>Welome to App 1</h3>
      </div>
      <div>
        <button
          onClick={handleSso}
          style={{
            backgroundColor: "#4d76e5",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "200px",
            border: "none",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
