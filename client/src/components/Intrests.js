import React, {useEffect,useState,useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import SimpleDialogDemo from "./DialogBox";

const Intrests=()=> {
  const [display, setDisplay] = useState(false);
  const authContext = useContext(AuthContext);
  const {user} = authContext;

  const [appDev, setAppDev] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [gameDev, setGameDev] = useState(false);
  const [dsa, setDsa] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [machineLearning, setMachineLearning] = useState(false);
  const [dataScience, setDataScience] = useState(false);
  const [others, setOthers] = useState(false);
 
  useEffect(() => {
    if (user&&user.interests) {
      setAppDev(user.interests.appDev);
      setWebDev(user.interests.webDev);
      setGameDev(user.interests.gameDev);
      setDsa(user.interests.dsa);
      setProgramming(user.interests.programming);
      setMachineLearning(user.interests.machineLearning);
      setDataScience(user.interests.dataScience);
      setOthers(user.interests.others);
    }
  }, [user]);

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="userDetailsHeading">Interests</div>
        <div className="btnClass" onClick={() => setDisplay(true)}>Change</div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)'}}>
        {appDev?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}> App Development </button> </div>:null}
        {webDev?<div class='my-2'>  <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}> Web Development </button> </div>:null}
        {gameDev?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Game Development</button> </div>:null}
        {dsa?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Data Structures and Algorithms</button> </div>:null}
        {programming?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Programming</button> </div>:null}
        {machineLearning?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Machine Learning</button> </div>:null}
        {dataScience?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Data Science</button> </div>:null}
        {others?<div class='my-2'> <button class="btn btn-sm" style={{width:"80%",backgroundColor:'#fae5d9', color:'#f3912e'}}>Others </button></div>:null}

      </div>
      {display && <SimpleDialogDemo pageName={"Intrests"} setDisplay={setDisplay} /> }
      <div className="underline"></div>
    </div>
  );
}

export default Intrests;