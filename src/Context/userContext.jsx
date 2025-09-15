import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    // Internal functions to update user and token (not exposed)
    window.setUserContext = setUser;
    window.setTokenContext = setToken;
    
    return (
        <UserContext.Provider value={{ user, token }}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
    const context = useContext(UserContext)
    return context
}

// Helper function to set user and token from anywhere
export const setUserToContext = (userData) => {
    if (window.setUserContext) {
        window.setUserContext(userData.user || userData);
    }
    if (window.setTokenContext && userData.token) {
        window.setTokenContext(userData.token);
    }
}