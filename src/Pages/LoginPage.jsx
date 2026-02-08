
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Spinner, Alert } from 'react-bootstrap';
import './Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error: authError } = useAuth();
    const navigate = useNavigate();
    const [localError, setLocalError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');

        if (!email || !password) {
            setLocalError('Please fill in all fields');
            return;
        }

        const result = await login(email, password);
        if (result.success) {
            navigate('/home');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-overlay"></div>
            <div className="auth-card-modern">
                <div className="auth-visual-side">
                    <h1 className="brand-text">TURMET</h1>
                    <p className="welcome-text">
                        Discover the world's most amazing destinations with us.
                        Your journey begins here.
                    </p>
                </div>
                <div className="auth-form-side">
                    <div className="text-start mb-4">
                        <h2 className="auth-title">Welcome Back</h2>
                        <p className="auth-subtitle">Please enter your details to sign in.</p>
                    </div>

                    {(localError || authError) && (
                        <Alert variant="danger" onClose={() => setLocalError('')} dismissible={!authError} className="mb-4">
                            {localError || authError}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="modern-input-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="modern-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="modern-input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="modern-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="modern-btn" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
                        </button>
                    </form>

                    <div className="auth-footer-link">
                        Don't have an account?
                        <Link to="/register">Create free account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
