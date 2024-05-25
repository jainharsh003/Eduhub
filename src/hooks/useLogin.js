// /src/hooks/useLogin.js
import { useState } from 'react';
import AuthApi from '../Api/AuthApi';
import useAuth from './useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await AuthApi.login(credentials.email, credentials.password);
      if (response.user) {
        login(response.user);
        toast.success('Login successful!');
        navigate('/'); // Navigate to the dashboard or any other desired page
      } else {
        setError(response.message || 'Invalid credentials');
        toast.error(response.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during login');
      toast.error('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login: loginHandler,
    isLoading,
    error,
  };
};

export default useLogin;
