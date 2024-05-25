// /src/hooks/useRegister.js
import { useState } from 'react';
import AuthApi from '../Api/AuthApi';
import useAuth from './useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const registerHandler = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await AuthApi.register(credentials.email, credentials.password);
      if (response.user) {
        login(response.user);
        toast.success('Registration successful!');
        navigate('/'); // Navigate to the dashboard or any other desired page
      } else {
        setError(response.message || 'Registration failed');
        toast.error(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'An error occurred during registration');
      toast.error('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register: registerHandler,
    isLoading,
    error,
  };
};

export default useRegister;
