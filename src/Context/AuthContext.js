import React, { useContext, useState } from 'react';
import api from '../api';  
  
const AuthContext = React.createContext(undefined);
  
const AuthProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);


  const onLogin = async (email, password) => {
    setIsFetching(true)
    try {
      const data = await api.profile.login(email, password);
      console.log(data);
      setIsFetching(false);
      setIsError(null);
      setLoginSuccess(true);
    } catch (error) {
      setIsError(error);
      setIsFetching(false);
    }
  };

  const state = [
    {
      isFetching, isError, loginSuccess,
    },
    {
      onLogin,
    }
  ];

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAutn can only be used inside AuthContext');
  }
  return context;
};

export {
  AuthProvider,
  useAuth
};
