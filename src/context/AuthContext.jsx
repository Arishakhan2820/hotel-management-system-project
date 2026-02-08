
import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ensure this matches your backend URL
    const API_URL = 'http://localhost:5001/api/auth';

    // Check if user is logged in
    const checkUserLoggedIn = async () => {
        try {
            const res = await fetch(`${API_URL}/me`, {
                method: 'GET',
                credentials: 'include', // Important for cookies
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();

            if (res.ok && data.success) {
                setUser(data.data);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error(err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    // Login
    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            setUser(data.data);
            return { success: true };
        } catch (err) {
            setError(err.message);
            return { success: false, message: err.message };
        } finally {
            setLoading(false);
        }
    };

    // Register
    const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setUser(data.data);
            return { success: true };
        } catch (err) {
            setError(err.message);
            return { success: false, message: err.message };
        } finally {
            setLoading(false);
        }
    };

    // Logout
    const logout = async () => {
        try {
            await fetch(`${API_URL}/logout`, {
                method: 'POST',
                credentials: 'include',
            });
            setUser(null);
        } catch (err) {
            console.error(err);
        }
    };

    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
