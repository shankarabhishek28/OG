import React from 'react'
import '../components/Navbar.css'
import {NavLink} from 'react-router-dom'
// In your JavaScript or CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav>
        <div className='nav_container' >
            <div className='logo'>LOGO</div>
           <ul className='nav_links'>
            <li><NavLink to = "/" className={({isActive})=> isActive ? 'active-nav':'text'}>HOME</NavLink></li>
            <li><NavLink to = "/trending" className={({isActive})=> isActive ? 'active-nav':'text'}>TRENDING</NavLink></li>
            <li><NavLink to = "/top-banquets" className={({isActive})=> isActive ? 'active-nav':'text'}>TOP BANQUETS</NavLink></li>
            <li className='search-bar'>
            <input type='search' placeholder='Search...' />
            <button><i className='fas fa-search'></i></button>
          </li>
           </ul>

        </div>
    </nav>
  )
}

export default Navbar