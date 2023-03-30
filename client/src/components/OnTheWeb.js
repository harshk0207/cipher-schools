import React, {useEffect,useState,useContext } from "react";
import UserContext from "../context/user/UserContext";
import AuthContext from "../context/auth/AuthContext";

export default function OnTheWeb() {

  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const {updateSocials} = userContext;
  const { user ,loadUser} = authContext;

  const [disable, setDisable] = useState(true);

  const [linkedIn, setLinkedIn] = useState(null);
  const [gitHub, setGitHub] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [website, setWebsite] = useState(null);

  const socialObj = [
    { text: "Linkedin", img: <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" />},
    { text: "GitHub", img: <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" /> },
    { text: "Facebook", img: <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" /> },   
    { text: "Twitter", img: <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" /> },
    { text: "Instagram", img: <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" /> },
    { text: "Website", img: <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" /> },
  ]

  useEffect(() => {
    if(user&&user.socials){
      setGitHub(user.socials.gitHub);
      setLinkedIn(user.socials.linkedIn);
      setFacebook(user.socials.facebook);
      setTwitter(user.socials.twitter);
      setInstagram(user.socials.instagram);
      setWebsite(user.socials.website);
    }
  }, [user]);

  const clickHandler = async () => {
    setDisable(!disable)
    if(!disable) {
      const updateAndRefetch = async () => {
        const socials={
            linkedIn,
            gitHub,
            facebook,
            twitter,
            instagram,
            website
        }
        await updateSocials(socials);
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
        <div className="userDetailsHeading">On The Web</div>
        <div className="btnClass" onClick={() => clickHandler()}>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="socialWrapper">
        <div className="socialRow">
            <div className="socialEle">
                <div className="socialText">{socialObj[0].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[0].img}</span>
                    <input type="text" placeholder={socialObj[0].text} className="socialInput" disabled={disable} value={linkedIn===null ? "" : linkedIn} onChange={(e)=>setLinkedIn(e.target.value)} />
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
            <div className="socialEle">
                <div className="socialText">{socialObj[1].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[1].img}</span>
                    <input type="text" placeholder={socialObj[1].text} className="socialInput" disabled={disable} value={gitHub===null ? "" : gitHub} onChange={(e)=>setGitHub(e.target.value)} />
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
        </div>
        <div className="socialRow">
            <div className="socialEle">
                <div className="socialText">{socialObj[2].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[2].img}</span>
                    <input type="text" placeholder={socialObj[2].text} className="socialInput" disabled={disable} value={facebook===null ? "" : facebook} onChange={(e)=>setFacebook(e.target.value)} />
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
            <div className="socialEle">
                <div className="socialText">{socialObj[3].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[3].img}</span>
                    <input type="text" placeholder={socialObj[3].text} className="socialInput" disabled={disable} value={twitter===null ? "" : twitter} onChange={(e)=>setTwitter(e.target.value)}/>
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
        </div>
        <div className="socialRow">
            <div className="socialEle">
                <div className="socialText">{socialObj[4].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[4].img}</span>
                    <input type="text" placeholder={socialObj[4].text} className="socialInput" disabled={disable} value={instagram===null ? "" : instagram} onChange={(e)=>setInstagram(e.target.value)}/>
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
            <div className="socialEle">
                <div className="socialText">{socialObj[5].text}</div>
                <div className="socialInputBox">
                    <span className="socialImg">{socialObj[5].img}</span>
                    <input type="text" placeholder={socialObj[5].text} className="socialInput" disabled={disable} value={website===null ? "" : website} onChange={(e)=>setWebsite(e.target.value)}/>
                    { !disable && <span className="pencilClass">
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" />
                    </span>}
                </div>
            </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
}

