// /src/components/RequireAuth.js
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ role, children }) => {
  const { state } = useAuth();
  // Check if user object exists and has the required role
  const isAuthenticated = state.isAuthenticated;
  const hasRequiredRole = role ? state.user && state.user.role.includes(role) : true;

  if (isAuthenticated && hasRequiredRole) {
    return children;
  } else {
    // Redirect to the login page or handle unauthorized access
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
