import { useState, useEffect } from "react";
import { api } from '../services/api';

export const useLogin = (_, user) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchLogin = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const result = await api.login(user);
                setData(result);
            } catch (err) {
                if (err.name === 'TypeError' || err.message.includes('fetch')) {
                    setError('No se pudo conectar al servidor. Verifica tu conexión.');
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        
        if (user) {
            fetchLogin();
        }
    }, [user]);

    return { loading, error, data };
};

