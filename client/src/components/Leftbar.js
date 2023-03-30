import React,{useContext} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MessageIcon from '@mui/icons-material/Message';
import TourIcon from '@mui/icons-material/Tour';
import AuthContext from '../context/auth/AuthContext';
const Leftbar = () =>{
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;
  const onlogout=()=>{
    console.log("nabjlqbal")
    logout();
  }
  let sideBarEle = [
    { text: "Home", img: <HomeIcon />  },
    { text: "Courses", img: <LibraryBooksIcon /> },
    { text: "Trending", img: <ExploreIcon /> },
    { text: "Following", img: <PersonAddIcon /> },
    { text: "Dashboard", img: <DashboardIcon /> },
    { text: "Discord", img: <InsertEmoticonIcon /> },
    { text: "Creater Access", img: <CopyrightIcon /> },
    { text: "Feedback", img: <MessageIcon /> },
    { text: "Tour", img: <TourIcon /> },
    {text:"Logout", img:<i class="fa-solid fa-lg fa-right-from-bracket" onClick={onlogout}></i>}
  ]
return (
    <div className='leftBar'>
        {sideBarEle.map((ele, idx) => {
            return (
                <div className='leftBarElements' >
                  <div>{ele.img}</div>
                  <div style={{ fontSize: "12px" }}>{ele.text}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Leftbar