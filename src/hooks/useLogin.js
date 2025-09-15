import { useState, useEffect } from "react";

export const useLogin = (url, user) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchLogin = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
                
                const result = await response.json();
                
                
                if (!response.ok) {
                    throw new Error(result.message || 'Error en el login');
                }
                
                setData(result);
            } catch (err) {
                setError(err.message);
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

