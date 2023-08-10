import React, { useState } from "react"
import { useContext } from "react"
import sublinks from './data'


const AppContext=React.createContext()
export const AppProvider=({children})=>{
    const[isSideBarOpen,setIsSideBarOpen]=useState(false)
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(false)
    const [location,setLocation] =useState({})
    const [page,setPage]=useState({page:'',links:[]})
    const openSideBar =()=>{
        setIsSideBarOpen(true)
    }
    const closeSideBar =()=>{
        setIsSideBarOpen(false)
    }
    const openSubMenu =(text,coordinates)=>{
        const page=sublinks.find((link)=>
        link.page===text
        )       
        setPage(page)
        setLocation(coordinates)

        setIsSubmenuOpen(true)
    }
    const closeSubMenu =()=>{
        setIsSubmenuOpen(false)
    }
    return <AppContext.Provider 
    value={{
        openSideBar,closeSideBar,openSubMenu,closeSubMenu,isSideBarOpen,isSubmenuOpen,location,page
    }}>{children}</AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}