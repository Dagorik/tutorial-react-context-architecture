import React, {useEffect} from 'react';
import {useProfile} from '../../Context/ProfileContext';

export default (Profile) => function ProfileHoc() {
    const [{ profile, isFetching, isError, }, { getProfile}] = useProfile();

    useEffect(() => {
      getProfile()
    },[])

    const renderContent = () => {
      if (isFetching) {
        return <h1>Cargando...</h1>
      } 
      if (isError) {
        return <h1>{isError}</h1>
      }
      if (profile) {
        return (<Profile
          firstName={profile.firstName}
          email={profile.email}
          photoUrl={profile.photoUrl}/>
        )}
      return null;
    }

    return (renderContent())
        
}