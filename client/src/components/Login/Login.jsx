import React ,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import './Login.css'
export default function Login() {
  const [name, setName] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      name,
      password
    }).then(res => {
      if(res.data){
        const token = res.data
        localStorage.setItem('token', token);
        navigate('/welcome')
      }
    }).catch(err => {
      console.log(err)
    })
    
  }
  return (
    <div className="joinOuterContainer">
    <div className="joinInnerContainer">
      <h1 className="heading">Login</h1>
      <div>
        <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <input placeholder="Password" className="joinInput mt-20" type="text" onChange={(event) => setpassword(event.target.value)} />
      </div>
        <button className={'button mt-20'} type="submit" onClick={handleSubmit}>Sign In</button>
    </div>
  </div>
  )
}