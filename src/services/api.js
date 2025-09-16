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

    console.log('API Request:', `${API_BASE_URL}${endpoint}`, config);
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    console.log('API Response Status:', response.status);
    
    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        let error;
        try {
            error = JSON.parse(errorText);
        } catch {
            error = { message: errorText || `HTTP ${response.status}` };
        }
        throw new Error(error.message || `HTTP ${response.status}`);
    }
    
    const result = await response.json();
    console.log('API Success Response:', result);
    return result;
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