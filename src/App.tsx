import React, { useState } from 'react';
import Home from './pages/Home';
import BottomNavBar from './components/BottomNavBar';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const pages: { [key: string]: JSX.Element } = {
    home: <Home />,
    otra: <div style={{ paddingBottom: '60px' }}><h1>Otra Página</h1></div>,
  };

  const navItems = [
    { page: 'home', label: 'Inicio', icon: '🏠' },
    { page: 'otra', label: 'Otra', icon: '⭐' },
  ];

  return (
    <div>
      {pages[currentPage]}
      <BottomNavBar
        items={navItems}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </div>
  );
}

export default App;
