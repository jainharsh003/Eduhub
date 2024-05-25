import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import './Register.css';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';

const Register = () => {
    const { register, isLoading, error } = useRegister();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setFormError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setFormError('Passwords do not match');
            return;
        }

        setFormError('');
        
        try {
            await register({ email, password });
        } catch (error) {
            setFormError(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="register-container">
            <div className="register-header">
                <div className="register-text">Register</div>
                <div className="register-underline"></div>
            </div>
            <form className="register-inputs" onSubmit={handleSubmit}>
                <div className="register-input">
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
                <div className="register-input">
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
                <div className="register-input">
                    <img src={passwordIcon} alt="Confirm Password Icon" />
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        aria-label="Confirm Password"
                        required
                    />
                    <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                        {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                {formError && <div className="register-error">{formError}</div>}
                <button type="submit" className="register-submit-button" disabled={isLoading}>
                    {isLoading ? 'Signing Up...' : 'Register'}
                </button>
            </form>
            {error && <div className="register-error">{error}</div>}
            <div className="register-footer">
                <span>Already have an account?</span>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Register;
