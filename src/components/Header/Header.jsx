import './header.css';
import { LOGO_URL } from '../../Utils/constants';
import { useState } from 'react';
export const Header = () => {
  const [logbutton , setLogButton] = useState("LogIn")
  const handleLogButton = () => {
    logbutton === "LogIn" ? setLogButton("LogOut") : setLogButton("LogIn")
  }
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
            <button className='login-btn' onClick={handleLogButton}> {logbutton} </button>
          </ul>
        </div>
      </div>
    )
  }