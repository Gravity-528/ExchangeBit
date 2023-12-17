import { createContext } from "react";

export const SiteContext=createContext();


const SideContextProvider=({children})=>{

    

    return(
        <SiteContext.Provider value={{}}>
            {children}
        </SiteContext.Provider>
    )
}

export default SideContextProvider;