import React, { useContext, useState } from 'react';
import api from '../api';  
  
const ProfileContext = React.createContext(undefined);
  
const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);


  const getProfile = async () => {
    setIsFetching(true)
    try {
      const data = await api.profile.getProfile();
      setProfile(data);
      setIsFetching(false);
    } catch (error) {
      setIsError(error);
      setIsFetching(false);
    }
  };

  const state = [
    {
      profile, isFetching, isError,
    },
    {
      getProfile,
    }
  ];

  return (
    <ProfileContext.Provider value={state}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile can only be used inside ProfileContext');
  }
  return context;
};

export {
  ProfileProvider,
  useProfile
};
