import React from 'react'
import Login from './components/Login/Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import Logout from './components/Logout/Logout'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/welcome" Component={Welcome}/>
      <Route path="/logout" Component={Logout}/>
    </Routes>
    </BrowserRouter>
  )
}
