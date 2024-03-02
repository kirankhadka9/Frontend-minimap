import React from 'react'
import Header from '../../layout/Header'
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
   <>
   Heading
    {/* <Header/> */}
    <Outlet/>
   </>
  )
}

export default Home