import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Rightbar = () =>{
  let sideBarElement = [
    { title: "Dashboard", img: <DashboardIcon />, selected: "white" },
    { title: "My Profile", img: <Person2Icon />, selected: "#F3912E" },
    { title: "Enrolled Courses", img: <LibraryBooksIcon />, selected: "white" },
    { title: "Wishlist", img: <AutoStoriesIcon />, selected: "white" },
    { title: "Liked Videos", img: <ThumbUpAltIcon />, selected: "white" },
  ];
  return (
    <div style={{ backgroundColor: "white", marginTop: "0.1rem",paddingLeft:'1rem',paddingRight:"1rem",height:'500px',width:'100%' ,borderRadius:'4px'}}>
      {sideBarElement.map((ele) => {
        return (
          <div className="rightSideBarEle my-2" style={{ backgroundColor: ele.selected}}>
            <div class='p-2' style={{ display: "flex", alignItems: "center" }}>{ele.img}</div>
            <div class='p-2' style={{ display: "flex", alignItems: "center" }}>{ele.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Rightbar;