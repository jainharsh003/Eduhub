import { useState } from 'react';
import AuthApi from '../Api/AuthApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from './useAuth';

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      setIsLoading(true);
      await AuthApi.logout();
      logout(); // Call logout from useAuth to clear the user context
      toast.success('Logout successful!');
      navigate('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    logout: logoutHandler,
    isLoading,
  };
};

export default useLogout;
