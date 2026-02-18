import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

import toast from 'react-hot-toast';

interface User {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (credentials: any) => Promise<User>;
    register: (userData: any) => Promise<User>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await api.get('/api/users/profile');
                setUser(data);
            } catch (err) {
                // User not logged in or token expired
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (credentials: any) => {
        const { data } = await api.post('/api/users/login', credentials);
        setUser(data);
        return data;
    };

    const register = async (userData: any) => {
        const { data } = await api.post('/api/users/register', userData);
        setUser(data);
        return data;
    };

    const logout = async () => {
        try {
            await api.post('/api/users/logout');
            setUser(null);
            toast.success('Logged out successfully');
        } catch (err) {
            console.error('Logout failed', err);
            // Even if API fails, clear local state
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
