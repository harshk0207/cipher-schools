import React, {useEffect,useState,useContext } from "react";
import UserContext from "../context/user/UserContext";
import AuthContext from "../context/auth/AuthContext";

export default function ProfessionalInformation() {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const {updateProfessionalInfo} = userContext;
  const { user ,loadUser} = authContext;

  const [disable, setDisable] = useState(true);

  const [education, setEducation] = useState(null);
  const [currently, setCurrently] = useState(null);
  
  useEffect(() => {
    if(user&&user.professionalInfo){
      setEducation(user.professionalInfo.education);
      setCurrently(user.professionalInfo.currently);
    }
  }, [user]);
  const clickHandler = async () => {
    setDisable(!disable);
    if(!disable) {
      const updateAndRefetch = async () => {
        const professionalInfo={
            education,
            currently
        }
        console.log(professionalInfo);
        await updateProfessionalInfo(professionalInfo);
        await loadUser();
      };
      updateAndRefetch();
    }
  }
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
        <div className="userDetailsHeading">Professional Information</div>
        <div className="btnClass" onClick={() => clickHandler() }>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="professionalWrapper">
        <div className="professionalEle">
            <div className="professionalText">Highest Education</div>
            <div className="professionalOptn">
                <select style={{ border: "none", width: "100%" }} disabled={disable} value={education===null ? "" : education} onChange={(e)=>setEducation(e.target.value)}>
                    <option>Primary</option>
                    <option>Secondary</option>
                    <option selected>Higher Secondary</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
                </select>
            </div>
        </div>
        <div className="professionalEle">
            <div className="professionalText">What do you do currently?</div>
            <div className="professionalOptn">
                <select style={{ border: "none", width: "100%" }} disabled={disable} value={currently===null ? "" : currently} onChange={(e)=>setCurrently(e.target.value)}>
                    <option>Schooling</option>
                    <option>Teaching</option>
                    <option selected>College Student</option>
                    <option>Job</option>
                    <option>Freelancing</option>
                </select>
            </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
}
