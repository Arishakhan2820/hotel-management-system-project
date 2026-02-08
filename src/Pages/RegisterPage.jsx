
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Spinner, Alert } from 'react-bootstrap';
import './Auth.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'guest'
    });
    const { register, loading, error: authError } = useAuth();
    const navigate = useNavigate();
    const [localError, setLocalError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');

        const { name, email, password, confirmPassword, phone, role } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setLocalError('Please fill in all required fields');
            return;
        }

        if (password !== confirmPassword) {
            setLocalError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setLocalError('Password must be at least 6 characters');
            return;
        }

        const result = await register({ name, email, password, phone, role });
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
                        Join our community of travelers.
                        Create an account to book your next adventure.
                    </p>
                </div>
                <div className="auth-form-side">
                    <div className="text-start mb-4">
                        <h2 className="auth-title">Create Account</h2>
                        <p className="auth-subtitle">Start your journey with us today.</p>
                    </div>

                    {(localError || authError) && (
                        <Alert variant="danger" onClose={() => setLocalError('')} dismissible={!authError} className="mb-4">
                            {localError || authError}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="modern-input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="modern-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modern-input-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="modern-input"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modern-input-group">
                            <label>Role</label>
                            <select
                                name="role"
                                className="modern-input"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="guest">Guest</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="receptionist">Receptionist</option>
                                <option value="housekeeping">Housekeeping</option>
                            </select>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="modern-input-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="modern-input"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="modern-input-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="modern-input"
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="modern-btn" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : 'Create Account'}
                        </button>
                    </form>

                    <div className="auth-footer-link">
                        Already have an account?
                        <Link to="/">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
