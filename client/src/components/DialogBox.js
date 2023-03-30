import React, {useEffect,useState,useContext } from "react";
import UserContext from "../context/user/UserContext";
import AuthContext from "../context/auth/AuthContext";
import Dialog from "@mui/material/Dialog";

// import axios from "axios";

function SimpleDialog(props) {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const {updatePassword,updateProfile,updateInterests} = userContext;
  const { user ,loadUser} = authContext;

  const { open, setDisplay, pageName } = props;

  const [curPassword, setCurPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const[appDev,setAppDev]=useState(false);
  const[webDev,setWebDev]=useState(false);
  const[ml,setMl]=useState(false);
  const[ds,setDs]=useState(false);
  const[prog,setProg]=useState(false);
  const[dsa,setDsa]=useState(false);
  const[others,setOthers]=useState(false);
  const[gameDev,setGameDev]=useState(false);

  // React.useEffect(() => {
  //   let userData = JSON.parse(localStorage.getItem("userData"));
  //   setFirstName(userData.first_name);
  //   setLastName(userData.last_name);
  //   setEmail(userData.email);
  //   setPhone(userData.phone);
  // }, []);

  useEffect(() => {
    if(user){
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      
      if(user.interests){
        setAppDev(user.interests.appDev);
        setWebDev(user.interests.webDev);
        setMl(user.interests.machineLearning);
        setDs(user.interests.dataScience);
        setProg(user.interests.programming);
        setDsa(user.interests.dsa);
        setOthers(user.interests.others);
        setGameDev(user.interests.gameDev);
      }
    }
  }, [user]);

  const saveProfile = async () => {
    const updateAndRefetch = async () => {
      const profile={
        first_name:firstName,
        last_name:lastName,
      }
      await updateProfile(profile);
      await loadUser();
    };
    updateAndRefetch();
  }

  const saveIntrests = async () => {
   
    const updateAndRefetch = async () => {
      const interests={
        appDev:appDev,
        webDev:webDev,
        machineLearning:ml,
        dataScience:ds,
        programming:prog,
        dsa:dsa,
        others:others,
        gameDev:gameDev
      } 
      await updateInterests(interests);
      await loadUser();
    };
    updateAndRefetch();
  }
  const savePassword = async () => {
    console.log(curPassword, newPassword, confirmPassword);
    const updateAndRefetch = async () => {
      const passwords={
        curPassword,
        newPassword,
        confirmPassword
      }
      await updatePassword(passwords);
      await loadUser();
    };
    updateAndRefetch();
  };

  // password dialog box
  if (pageName === "Password") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div>
          <div className="passwordHeadings">Current Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="Current Password"
              className="dialogPasswordInput"
              onChange={(e) => setCurPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div>
          <div className="passwordHeadings">New Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="New Password"
              className="dialogPasswordInput"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div>
          <div className="passwordHeadings">Confirm Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="Confirm Password"
              className="dialogPasswordInput"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div className="dialogButton">
          <div className="cancel-btn" onClick={() => setDisplay(false)}>
            Cancel
          </div>
          <div className="save-btn" onClick={() => savePassword()}>
            Save
          </div>
        </div>
      </Dialog>
    );
  } 
  
  // profile update dialog box
  else if (pageName === "profileUpdate") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div style={{ gap: "10px", alignItems: "center", display: "grid", fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.43" }}>Profile Update</div>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
          <div className="dialogImage">
            <svg
              class="MuiSvgIcon-root MuiAvatar-fallback"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
          <div>
            <div>
              <div className="detailDialogtext">First Name</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="detailDialogtext">Last Name</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="detailDialogtext">Email Address</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Email Address"
                disabled
                value={email}
              />
              <div className="dialogButton">
                <div className="cancel-btn" onClick={() => setDisplay(false)}>
                  Cancel
                </div>
                <div className="save-btn" onClick={() => saveProfile()}>
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
  if (pageName === "Intrests") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div>
          <div class="row text-center">
            <div class="col-sm-6" >
              <button class="btn" onClick={()=>{setAppDev(!appDev)}} style={appDev?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                App Development
              </button>
            </div>
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setWebDev(!webDev)}} style={webDev?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                  Web Development
              </button>
            </div>
          </div>
          <div class="row text-center my-4">
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setGameDev(!gameDev)}} style={gameDev?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                Game Development
              </button>
            </div>
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setDsa(!dsa)}} style={dsa?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                Data Structures
              </button>
            </div>
          </div>
          <div class="row text-center my-4">
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setProg(!prog)}} style={prog?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                Programming
              </button>
            </div>
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setMl(!ml)}} style={ml?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                Machine Learning
              </button>
            </div>
          </div> 
          <div class="row text-center my-4" >
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setDs(!ds)}} style={ds?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                Data Science
              </button>
            </div>
            <div class="col-sm-6">
              <button class="btn" onClick={()=>{setOthers(!others)}} style={others?{width:"100%",backgroundColor:'#f3912e', color:'white'}:{width:"100%",backgroundColor:'white', color:'black'}}>
                  Others
              </button>
            </div>
          </div>
        </div>
        <div className="dialogButton">
          <div className="cancel-btn" onClick={() => setDisplay(false)}>
            Cancel
          </div>
          <div className="save-btn" onClick={() => saveIntrests()}>
            Save
          </div>
        </div>
      </Dialog>
    );
  } 
}



export default function SimpleDialogDemo({ pageName, setDisplay }) {
  return (
    <div>
      <SimpleDialog
        open={true}
        onClose={() => setDisplay(false)}
        setDisplay={setDisplay}
        pageName={pageName}
      />
    </div>
  );
}
