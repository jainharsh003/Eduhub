// /src/context/AuthContext.js
import { createContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const storedAuthState = JSON.parse(localStorage.getItem('authState'));

  const [state, dispatch] = useReducer(authReducer, storedAuthState || { user: null, isAuthenticated: false });

  useEffect(() => {
    const saveStateToLocalStorage = () => {
      localStorage.setItem('authState', JSON.stringify(state));
    };
    saveStateToLocalStorage();
    return () => saveStateToLocalStorage();
  }, [state]);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
