import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'

function Submenu() {
  const { isSubmenuOpen,
    location,
    page:{
      page,links
    }
  } = useGlobalContext()
  const container = useRef(null)
  const [column,setColumn]=useState('col-2')
  useEffect(() => {
    setColumn('col-2')
    if(links.length===3){
      setColumn('col-3')
    }if(links.length>3){
      setColumn('col-4')
    }
    const submenu = container.current
    const { center, bottom } = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

  }, [location,links])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link,index)=>{
        const {label,icon,url}=link
        return(
          <a key={index} href={url}>{icon}{label}</a>
        )
      })}</div>
    </aside>
  )
}

export default Submenu