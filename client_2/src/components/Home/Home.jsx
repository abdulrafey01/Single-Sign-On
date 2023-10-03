import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()
  useEffect(() => {
    // const token = localStorage.getItem('token')
    // if (token) {
    //   navigate('/data')
    // }
  },[])

  const handleSso = () => {
    const loginUrl = 'http://localhost:3000/welcome';
    const left = (window.innerWidth - 100) / 2;
  const top = (window.innerHeight - 100) / 2;
    const popup = window.open(loginUrl, 'popup', `width=400,height=600,top=${top},left=${left}`);
  
    // const handleMessage = (event) => {
    //   const { data } = event;
    //   if (data) {
    //     localStorage.setItem('token', JSON.stringify(data));
    //     window.removeEventListener('message', handleMessage); // Remove the event listener
    //     setTimeout(() => {
    //       popup.close();
    //       navigate('/data');
    //     }, 2000);
    //   }
    // };
  
    // window.addEventListener('message', handleMessage);
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
        <h3>Welome to App 2</h3>
      </div>
      <div>
        <button
        onClick={handleSso}
          style={{
            backgroundColor: "#41c539",
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
