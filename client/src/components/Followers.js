import React, {useEffect,useState,useContext } from "react";
import UserContext from "../context/user/UserContext";
import UserImage from '../Images/user.jpg'

const Followers = () => {
  const [follow,setFollow]=useState(false);
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          overflowY: "scroll",
          backgroundColor:'#EFFBFB',height:'100%',overflowY:'scroll',
        }}
      > 
        <div className="mx-4 my-4">
          
          <div className="userDetailsHeading"> Followers </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)'}}>
              <div class="card mx-3 my-3" style={{width: '18rem'}}>
                  <img src={UserImage} class="card-img-top" style={{width: '15rem',margin:'auto'}}/>
                  <div class="card-body">
                    <div class="card-text fw-bold">name</div>
                    <div class="card-text">email</div>
                    <div class="card-text">0 Followers</div>
                  </div>
                  <button
                  type="submit"
                  className={`${follow?'btn btn-outline-primary btn-block my-2 mx-3':'btn btn-primary btn-block my-2 mx-3'}`}
                  onClick={()=>{setFollow(!follow)}}
                  >Follow</button> 
              </div>   
              <div class="card mx-3 my-3" style={{width: '18rem'}}>
                  <img src={UserImage} class="card-img-top" style={{width: '15rem',margin:'auto'}}/>
                  <div class="card-body">
                    <div class="card-text fw-bold">name</div>
                    <div class="card-text">email</div>
                    <div class="card-text">0 Followers</div>
                  </div>
                  <button
                  type="submit"
                  className={`${follow?'btn btn-outline-primary btn-block my-2 mx-3':'btn btn-primary btn-block my-2 mx-3'}`}
                  onClick={()=>{setFollow(!follow)}}
                  >Follow</button> 
              </div>   
              <div class="card mx-3 my-3" style={{width: '18rem'}}>
                  <img src={UserImage} class="card-img-top" style={{width: '15rem',margin:'auto'}}/>
                  <div class="card-body">
                    <div class="card-text fw-bold">name</div>
                    <div class="card-text">email</div>
                    <div class="card-text">0 Followers</div>
                  </div>
                  <button
                  type="submit"
                  className={`${follow?'btn btn-outline-primary btn-block my-2 mx-3':'btn btn-primary btn-block my-2 mx-3'}`}
                  onClick={()=>{setFollow(!follow)}}
                  >Follow</button> 
              </div>   
          </div>

        </div>
      </div>
    </div>
  )
}

export default Followers