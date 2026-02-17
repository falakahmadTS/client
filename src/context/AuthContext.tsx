import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

import toast from 'react-hot-toast';

interface User {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
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
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    const login = async (credentials: any) => {
        const { data } = await api.post('/api/users/login', credentials);
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    };

    const register = async (userData: any) => {
        const { data } = await api.post('/api/users/register', userData);
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
        toast.success('Logged out successfully');
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
