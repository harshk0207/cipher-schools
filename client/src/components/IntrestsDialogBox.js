import * as React from "react";
import Dialog from "@mui/material/Dialog";
// import axios from "axios";

function SimpleDialog(props) {
  const { open, setDisplay, pageName } = props;
  const [intrests,setIntrests]=React.useState({
    appDev:false,
    webDev:false,
    gameDev:false,
    ml:false,
    ds:false,
    others:false,
    dsa:false,
  });

  // React.useEffect(() => {
  //   let userData = JSON.parse(localStorage.getItem("userData"));
  //   setFirstName(userData.first_name);
  //   setLastName(userData.last_name);
  //   setEmail(userData.email);
  //   setPhone(userData.phone);
  // }, []);

  const savePassword = async () => {
    // if (newPassword !== confirmPassword)
    //   toast.error("New password != Confirm Password", toastOptions);
    // else {
    //   let userId = JSON.parse(localStorage.getItem("userData"))._id;
    //   let { data } = await axios.post(
    //     "http://localhost:5000/updateUser/password",
    //     {
    //       userId,
    //       cur_password: curPassword,
    //       new_password: newPassword,
    //     }
    //   );
    //   if (data.data.length === 0) toast.error(data.msg, toastOptions);
    //   else {
    //     toast.success(data.msg, toastOptions);
    //     curPassword("");
    //     newPassword("");
    //     confirmPassword("");
    //   }
    // }
  };
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
  } else if (pageName === "profileUpdate") {
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
              />
              <div className="detailDialogtext">Last Name</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Last Name"
                value={lastName}
              />
              <div className="detailDialogtext">Email Address</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Email Address"
                disabled
                value={email}
              />
              <div className="detailDialogtext">Mobile Number</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Mobile Number"
                value={phone}
              />
              <div className="dialogButton">
                <div className="cancel-btn" onClick={() => setDisplay(false)}>
                  Cancel
                </div>
                <div className="save-btn" onClick={() => savePassword()}>
                  Save
                </div>
              </div>
            </div>
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
