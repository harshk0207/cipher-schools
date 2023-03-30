import React, {useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import SimpleDialogDemo from './DialogBox'

const CoverSection = () => {
  const navigate=useNavigate();
  const authContext = useContext(AuthContext);
  const { user ,loadUser} = authContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if(user){
      setName(user.first_name);
      setEmail(user.email);
    }
  }, [user]);
  return (
    <div class='detailsWrapper'>
      {display && <SimpleDialogDemo setDisplay={setDisplay} pageName="profileUpdate" /> }
      <div style={{width:'8%'}}>
          <div 
          style={{width:'70%',height: "70%", borderRadius: "50%", position: "relative", alignItems: "center", justifyContent: "center",backgroundColor:'#999999'}}
          onClick={()=> setDisplay(true)}
          >
            <svg
              class="MuiSvgIcon-root MuiAvatar-fallback"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ overflow: "auto" }}
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
        </div>
        <div style={{width:'80%'}}>
          <div style={{ marginLeft: "1.5rem", marginRight: "70rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "1.25",
                fontWeight: "400",
                margin: "0",
              }}
            >
              Hello
            </h2>
            <h1 style={{ fontSize: "1.3rem", margin: "0" }}>{name}</h1>
            <h2 style={{ fontSize: "1.3rem", fontWeight: "400", margin: "0" }}>
            {email}
            </h2>
          </div>
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          fontWeight: "550",
          width:'10%',
          display: "flex",
          alignItems: "center",
        }}
        onClick={()=>navigate('/profile/followers')}
      >
        0 Followers
      </div>
    </div>
  )
}

export default CoverSection