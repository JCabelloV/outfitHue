import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/', icon: '🏠' },
  { label: 'Paletas', path: '/palettes', icon: '🎨' },
  { label: 'Perfil', path: '/profile', icon: '👤' },
  { label: 'Ajustes', path: '/settings', icon: '⚙️' },
];

const BottomNav = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #ccc',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.05)',
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#000' : '#888',
            fontWeight: isActive ? 'bold' : 'normal',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px',
          })}
        >
          <span style={{ fontSize: '20px' }}>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;