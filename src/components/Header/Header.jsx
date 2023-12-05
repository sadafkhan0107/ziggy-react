import './header.css';
import { LOGO_URL } from '../../Utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <li> <Link to='/'> Home </Link></li>
            <li>Contact Us</li>
            <li> <Link to='/about'> About Us </Link></li>
            <li>Cart</li>
            <button className='login-btn' onClick={handleLogButton}> {logbutton} </button>
          </ul>
        </div>
      </div>
    )
  }