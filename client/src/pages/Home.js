import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Leftbar from "../components/Leftbar";

const Home = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default Home