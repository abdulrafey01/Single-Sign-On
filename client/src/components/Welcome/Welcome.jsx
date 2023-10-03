import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export default function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token') 
        if(!token){
            navigate('/')
        }
    }, [])

  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div>
        <h2>Thank You for Registering 😊</h2>
        <br />
        <h2>Redirecting you to your App. 🚀</h2>
        </div>
        </div>
  )
}
