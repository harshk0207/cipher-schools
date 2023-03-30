import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthState from './context/auth/AuthState';
import UserState from './context/user/UserState';

import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Profile from "./pages/Profile";
import Main from "./components/Main";
import Followers from "./components/Followers";

const App = () => {
  return (
    <>
    <AuthState>
      <UserState>
    <Router>
      <Routes>
        <Route path='' element={<Home/>}>
          <Route path="/" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Route>
        <Route path='profile' element={<Profile/>}>
          <Route path="/profile" element={<Main/>} />
          <Route path="followers" element={<Followers/>} />
        </Route>
      </Routes>
    </Router>
    </UserState>
    </AuthState>
    </>
  )
}

export default App