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
                
                
                if (!response.ok) {
                    switch (response.status) {
                        case 400:
                            throw new Error('Datos inválidos. Verifica tu usuario y contraseña.');
                        case 401:
                            throw new Error('Credenciales incorrectas. Verifica tu usuario y contraseña.');
                        case 404:
                            throw new Error('Usuario no encontrado. ¿Te has registrado?');
                        case 500:
                            throw new Error('Error del servidor. Inténtalo más tarde.');
                        default:
                            throw new Error(result.message || 'Error al iniciar sesión');
                    }
                }
                
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
    }, [url, user]);

    return { loading, error, data };
};

