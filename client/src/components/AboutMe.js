import React, { useEffect, useState ,useContext} from "react";
import UserContext from "../context/user/UserContext";
import AuthContext from "../context/auth/AuthContext";

export default function AboutMe() {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const {updateAboutMe} = userContext;
  const { user ,loadUser} = authContext;

  const [disable, setDisable] = useState(true);

  const [text, setText] = useState('');

  useEffect(() => {
    if(user){
      setText(user.aboutMe);
    }
  }, [user]);

  const clickHandler = async () => {
    setDisable(!disable);
    if(!disable) {
      // send request to update about me
      console.log('called')
      const updateAndRefetch = async () => {
        setText(text)
        await updateAboutMe({aboutMe:text});
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
        <div className="userDetailsHeading">About Me</div>
        <div className="btnClass" onClick={() => clickHandler()}>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="aboutInputBox">
        <textarea
          className="aboutTextBox"
          placeholder="Add something about you."
          disabled={disable}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {!disable && (
          <span class="pencilClass">
            <img
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
              alt="pencil"
            />
          </span>
        )}
      </div>
      <div className="underline"></div>
    </div>
  );
}
