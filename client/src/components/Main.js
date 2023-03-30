import React from 'react'
import Rightbar from './Rightbar'
import CoverSection from "./CoverSection";
import Details from './Details';

const Main = () => {
  return (
    <div style={{width:"100%"}}>
    <CoverSection/>
      <div style={{width:"100%", display:'flex'}}>
        <div style={{backgroundColor:'#EFFBFB',height:'100%',width:'80%',overflowY:'scroll'}}>
          <Details/>
        </div>
        <div style={{padding:'0.5%',width:'20%'}}>
          <Rightbar/>
        </div>  
      </div>
    </div>
  )
}

export default Main