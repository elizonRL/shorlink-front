import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    // Load token from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (storedToken) {
            setToken(storedToken);
        }
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
    // Internal functions to update user and token (not exposed)
    window.setUserContext = (userData) => {
        setUser(userData);
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            localStorage.removeItem('user');
        }
    };
    
    window.setTokenContext = (tokenData) => {
        setToken(tokenData);
        if (tokenData) {
            localStorage.setItem('token', tokenData);
        } else {
            localStorage.removeItem('token');
        }
    };
    
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
};

// Helper function to logout and clear storage
export const logoutUser = () => {
    if (window.setUserContext) {
        window.setUserContext(null);
    }
    if (window.setTokenContext) {
        window.setTokenContext(null);
    }
};