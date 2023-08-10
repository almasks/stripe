import React from 'react'
import image from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'


function Navbar() {
    const {openSideBar,openSubMenu,closeSubMenu}=useGlobalContext()
    const displayMenu=(e)=>{
       const page=e.target.textContent
       const temp =e.target.getBoundingClientRect()
       const center=(temp.left+temp.right)/2
       const bottom=temp.bottom-3
        openSubMenu(page,{center,bottom})    

    }
    const handleSubmenu =(e)=>{
 if(!e.target.classList.contains('link-btn'))
 closeSubMenu()
    }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center ' >
            <div className='nav-header'>
                <img src={image} className='nav-logo' alt="stripe"/>
                <button className='btn toggle-btn' onClick={openSideBar}>
                <FaBars/>
                </button>
            </div>
            <ul className='nav-links'>
                <li>
                    <button className='link-btn' onMouseOver={displayMenu}>products</button>
                </li>
                <li>
                    <button className='link-btn'onMouseOver={displayMenu}>developers</button>
                </li>
                <li>
                    <button className='link-btn'onMouseOver={displayMenu}>company</button>
                </li>
            </ul>
            <button className=' btn signin-btn'>Sign In</button>

        </div>
    </nav>
  )
}

export default Navbar