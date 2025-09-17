import { useState, useEffect } from "react";
import { api } from '../services/api';

export const useRegister = (_, userData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchRegister = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const result = await api.register(userData);
                
                if (!response.ok) {
                    switch (response.status) {
                        case 400:
                            throw new Error('Datos inválidos. Verifica que todos los campos estén completos.');
                        case 409:
                            throw new Error('El usuario o email ya existe. Intenta con otros datos.');
                        case 422:
                            throw new Error('Email inválido o contraseña muy débil.');
                        case 500:
                            throw new Error('Error del servidor. Inténtalo más tarde.');
                        default:
                            throw new Error(result.message || 'Error al crear la cuenta');
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
        
        if (userData) {
            fetchRegister();
        }
    }, [userData]);

    return { loading, error, data };
};