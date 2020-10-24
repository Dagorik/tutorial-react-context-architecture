import './App.css';
import { ProfileProvider } from './Context/ProfileContext';
import Profile from './Scenes/Profile'

import { AuthProvider } from './Context/AuthContext';
import Login from './Scenes/Login'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
