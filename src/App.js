import './App.css';
import { ProfileProvider } from './Context/ProfileContext';
import Profile from './Scenes/Profile'

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    </div>
  );
}

export default App;
