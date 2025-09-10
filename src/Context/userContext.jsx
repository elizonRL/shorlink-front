import {  createContext, useContext } from "react";

const UserContext = createContext()

export const UserProvider =({Children})=>{
    const user = { username: 'Usuario Demo', email: 'demo@shorlink.app' }
    return(
        <UserContext.Provider value={user}>
            {Children}
        </UserContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = ()=>{
    const context = useContext(UserContext)
    return context
}