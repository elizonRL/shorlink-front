import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Redirect = () => {
    const { shortCode } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(3);
    
    // Fetch without authentication
    useEffect(() => {
        const fetchShortUrl = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:3000/api/short/${shortCode}`;
                console.log('🔍 Fetching URL:', url);
                
                const token = localStorage.getItem('token');
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        ...(token && { 'Authorization': `Bearer ${token}` })
                    }
                });
                console.log('📡 Response status:', response.status);
                console.log('📡 Response ok:', response.ok);
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.log('❌ Error response body:', errorText);
                    throw new Error(`HTTP ${response.status}: ${errorText}`);
                }
                
                const result = await response.json();
                console.log('✅ API response:', result);
                setData(result);
            } catch (err) {
                console.error('💥 Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (shortCode) {
            console.log('🚀 Starting fetch for shortCode:', shortCode);
            fetchShortUrl();
        } else {
            console.log('⚠️ No shortCode provided');
        }
    }, [shortCode]);
    
    // Debug info
    console.log('Redirect - shortCode:', shortCode);
    console.log('Redirect - data:', data);
    console.log('Redirect - error:', error);

    useEffect(() => {
        if (data?.originalUrl) {
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        window.location.href = data.originalUrl;
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [data]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Buscando enlace...</p>
                </div>
            </div>
        );
    }

    if (error || (!loading && !data)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
                <div className="text-center">
                    <div className="text-6xl mb-4">❌</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Enlace no encontrado</h1>
                    <p className="text-gray-600 mb-4">El enlace que buscas no existe o ha sido eliminado.</p>
                    <p className="text-sm text-gray-500 mb-4">Código: {shortCode}</p>
                    <p className="text-sm text-red-500 mb-4">Error: {error}</p>
                    <a 
                        href="/" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Ir al inicio
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
            <div className="text-center max-w-md mx-auto p-6">
                <div className="text-6xl mb-4">🔗</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirigiendo...</h1>
                <p className="text-gray-600 mb-4">
                    Serás redirigido a: <br />
                    <span className="font-medium text-blue-600 break-all">{data.originalUrl}</span>
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-4">{countdown}</div>
                <button 
                    onClick={() => window.location.href = data.originalUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                    Ir ahora
                </button>
            </div>
        </div>
    );
};

export default Redirect;