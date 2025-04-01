import { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(setUser);
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      await authService.login(email, password);
      return true;
    } catch (err) {
      setAuthError(err.message || 'Failed to login');
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (email, password) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      await authService.register(email, password);
    } catch (err) {
      setAuthError(err.message || 'Failed to register');
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    setAuthLoading(true);
    try {
      await authService.logout();
      return true;
    } catch (err) {
      setAuthError(err.message || 'Failed to logout');
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        authError,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
