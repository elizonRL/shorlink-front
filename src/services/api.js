const API_BASE_URL = 'http://localhost:3000/api';

// HTTP interceptor with token
const apiRequest = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers,
        },
        ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
        const errorText = await response.text();
        let error;
        try {
            error = JSON.parse(errorText);
        } catch {
            error = { message: errorText || `HTTP ${response.status}` };
        }
        throw new Error(error.message || `HTTP ${response.status}`);
    }
    
    return response.json();
};

// API methods
export const api = {
    // Short URLs
    createShortUrl: (originalUrl) => apiRequest('', {
        method: 'POST',
        body: JSON.stringify({ originalUrl }),
    }),
    
    getShortUrls: () => apiRequest(''),
    
    getShortUrlByCode: (shortCode) => apiRequest(`/${shortCode}`),
    
    deleteShortUrl: (shortUrlCode) => apiRequest(`/${shortUrlCode}`, {
        method: 'DELETE',
    }),
    
    // Auth
    login: (data) => apiRequest('/users/login', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    
    register: (data) => apiRequest('/users', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};