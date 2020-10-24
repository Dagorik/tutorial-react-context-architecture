import React, { useEffect } from 'react';
import {useAuth} from '../../Context/AuthContext';

export default (Login) => function LoginHoc() {
    const [{ loginSuccess, isFetching, isError, }, { onLogin}] = useAuth();

    useEffect(() => {
      if (loginSuccess) {
        alert('Next page')
      }
    }, [loginSuccess])

    return (<Login
      isFetching={isFetching}
      isError={isError}
      onLogin={onLogin} />

    )
}