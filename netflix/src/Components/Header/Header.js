
import React from 'react'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom"
import { SiNetflix } from "react-icons/si"



const Header = () => {




  return (



    <nav className='header'>
     
        <img src={logo} alt='logo' />



      <div >

        <Link to="/"> Movies </Link>
        <Link to="/trending">Trending</Link>
        <Link to="/music">Music</Link>
        <Link to="/favourite">Favourite</Link>
      </div>



      <SiNetflix />
    </nav>




  )
}

export default Header
