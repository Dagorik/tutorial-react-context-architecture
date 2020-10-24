import React, { useState } from 'react';

function Login({isFetching, isError, onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password)
  }

  return (
      <form onSubmit={onSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isFetching ? 'Cargando... ' : 'Login'}</button>
        {isError && <h1>{isError}</h1>}
      </form>
  )
}
export default Login;
