import React from 'react'
import image from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


function Navbar() {
    const {openSideBar,openSubmenu,closeSubMenu}=useGlobalContext()
  return (
    <nav className='nav'>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={image} className='nav-logo' alt="stripe"/>
                <button className='btn toggle-btn' onClick={openSideBar}>
                <FaBars/>
                </button>
            </div>
            <ul className='nav-links'>
                <li>
                    <button className='link-btn'>Products</button>
                </li>
                <li>
                    <button className='link-btn'>developers</button>
                </li>
                <li>
                    <button className='link-btn'>company</button>
                </li>
            </ul>
            <button className=' btn signin-btn'>Sign In</button>

        </div>
    </nav>
  )
}

export default Navbar