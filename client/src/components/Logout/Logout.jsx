import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import io from "socket.io-client";

export default function Logout() {
  let socket;

  socket = io("localhost:5000");

    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        axios.post('http://localhost:5000/logout','')
        window.close()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            window.close()
        }
    })
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        <h3>Are You Sure You Want to Logout From Central App</h3>
        <br />
        <button 
        onClick={handleLogout}
        style={{
            backgroundColor: "#41c539",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "200px",
            border: "none",
          }}>Logout 💻</button>
    </div>
  )
}
