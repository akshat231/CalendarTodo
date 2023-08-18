import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import Login from './Login.js'
import Register from './Register.js'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {
  var loggedin=window.localStorage.getItem('isloggedin');
  return (
    <>
    <Router>
      <Routes>
       <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Sidebar/>}/>
     <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
