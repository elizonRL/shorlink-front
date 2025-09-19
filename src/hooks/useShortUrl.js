import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const useCreateShortUrl = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const createShortUrl = async (originalUrl) => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.createShortUrl(originalUrl);
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createShortUrl, loading, error, data };
};

export const useGetShortUrls = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchShortUrls = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.getShortUrls();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShortUrls();
    }, []);

    return { data, loading, error, refetch: fetchShortUrls };
};

export const useGetShortUrlByCode = (shortCode) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!shortCode) return;

        const fetchShortUrl = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await api.getShortUrlByCode(shortCode);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchShortUrl();
    }, [shortCode]);

    return { data, loading, error };
};

export const useDeleteShortUrl = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteShortUrl = async (shortUrlCode) => {
        try {
            setLoading(true);
            setError(null);
            await api.deleteShortUrl(shortUrlCode);
            return true;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { deleteShortUrl, loading, error };
};