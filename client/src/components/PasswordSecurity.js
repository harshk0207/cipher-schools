import React, { useState } from "react";
import SimpleDialogDemo from "./DialogBox";

export default function PasswordSecurity() {
  const [display, setDisplay] = useState(false);
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
        <div className="userDetailsHeading">Password & Security</div>
        <div className="btnClass" onClick={() => setDisplay(true)}>Change</div>
      </div>
      <div className="passowrdWrapper">
        <input type="password" value=".................." className="passwordInput" disabled={true} />
      </div>
      {display && <SimpleDialogDemo pageName={"Password"} setDisplay={setDisplay} /> }
      <div className="underline"></div>
    </div>
  );
}
