import { createContext, useState } from "react";

export const SiteContext=createContext();


const SideContextProvider=({children})=>{

    const [toggle,setToggle]=useState(false);
    const [Post,setPost]=useState(false);


    return(
        <SiteContext.Provider value={{toggle,setToggle,Post,setPost}}>
            {children}
        </SiteContext.Provider>
    )
}

export default SideContextProvider;