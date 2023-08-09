import React, { useState } from "react"
import { useContext } from "react"

const AppContext=React.createContext()
export const AppProvider=({children})=>{
    const[isSideBarOpen,setIsSideBarOpen]=useState(true)
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(true)
    const openSideBar =()=>{
        setIsSideBarOpen(true)
    }
    const closeSideBar =()=>{
        setIsSideBarOpen(false)
    }
    const openSubMenu =()=>{
        setIsSubmenuOpen(true)
    }
    const closeSubMenu =()=>{
        setIsSubmenuOpen(false)
    }
    return <AppContext.Provider 
    value={{
        openSideBar,closeSideBar,openSubMenu,closeSubMenu,isSideBarOpen,isSubmenuOpen
    }}>{children}</AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}