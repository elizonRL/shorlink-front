import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserContext } from '../Context/userContext';

const AuthGuard = ({ children }) => {
    const { user, token } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        
        if (!token && !storedToken) {
            navigate('/login');
        }
    }, [token, navigate]);

    // Show loading or redirect if no authentication
    if (!token && !localStorage.getItem('token')) {
        return null;
    }

    return children;
};

export default AuthGuard;