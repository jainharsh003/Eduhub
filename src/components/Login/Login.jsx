import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import './Login.css';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';

const Login = () => {
    const { login, isLoading, error } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setFormError('Both fields are required');
            return;
        }

        setFormError('');
        
        try {
            await login({ email, password });
        } catch (error) {
            setFormError(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <div className="login-text">Login</div>
                <div className="login-underline"></div>
            </div>
            <form className="login-inputs" onSubmit={handleSubmit}>
                <div className="login-input">
                    <img src={emailIcon} alt="Email Icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email"
                        required
                    />
                </div>
                <div className="login-input">
                    <img src={passwordIcon} alt="Password Icon" />
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                        required
                    />
                    <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                        {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                {formError && <div className="login-error">{formError}</div>}
                <button type="submit" className="login-submit-button" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <div className="login-error">{error}</div>}
            <div className="login-footer">
                <span>Don't have an account?</span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Login;
