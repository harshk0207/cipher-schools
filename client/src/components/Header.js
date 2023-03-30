import React from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
     <MenuIcon/>
     <div className='mx-3'><img height="40px" src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" /></div>
     <div className='navbarBrand fw-bold' style={{fontSize:'1.2rem'}}>CipherSchools</div>
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-5">
            <ExploreIcon/> Browse 
            <KeyboardArrowDownIcon/>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="text" placeholder="Search and Learn"  style={{borderRadius:'4px'}} aria-label="Search"/ >
        <button class="btn btn-outline-success" type="submit">Search</button> */}
            <div className='navbarSearchBox' style={{alignItems:"center"}}>
                <div><SearchIcon /></div>
                <div style={{ width: "80%" }}><input type="text" className='navSearchInput' placeholder='Search and Learn' style={{backgroundColor:'transparent',border:'0px solid'}}/></div>
                <div><TuneIcon /></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "0.5rem" }}><NotificationsNoneIcon /></div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "0.5rem", cursor:'pointer' }} onClick={()=>navigate('/profile')}><AccountCircleIcon /></div>
      </form>
    </div>
  </div>
</nav> 
  )
}

export default Header