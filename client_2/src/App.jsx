import React,{useState} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Data from './components/Data/data'
import Home from './components/Home/Home'

import io from "socket.io-client";

export default function App() {
  const [isLogin, setisLogin] = useState(false);

  let socket;
  const navigate = useNavigate();

  socket = io("localhost:5000");

  socket.on("userLoggedIn", () => { 
    setisLogin(true)
    navigate('/data')
  });
  
  return (
    
    <Routes>
     <Route path="/" element={<Home isLogin={isLogin} />}/>
      <Route path="/data" element={<Data socket={socket} isLogin={isLogin} setisLogin={setisLogin}/>}/>
    </Routes>
  )
}
