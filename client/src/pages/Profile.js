import React,{useContext,useEffect,useState} from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Leftbar from "../components/Leftbar";
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenicated, user, loadUser } = authContext;
  const navigate=useNavigate();
    useEffect(() => {
    if (!isAuthenicated) {
      navigate("/");
    } else {
      if (!user) {
        loadUser();
      }
    }
  }, [isAuthenicated, user]);
  return (
    <>
    <Header/>
    <div style={{ display: "flex", height: "88.5vh" }}>
        <Leftbar />
        <Outlet/>
      </div>
    </>
  )
}

export default Profile