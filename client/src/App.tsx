import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import SavedPalettes from './pages/SavedPalettes';
import BottomNav from './components/BottomNavBar';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palettes" element={<SavedPalettes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
