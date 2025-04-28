import React from 'react'
import './BottomNavBar.css'

type NavItem = {
  page:string;
  label:string;
  icon: React.ReactNode;
};

type BottomNavBarProps = {
  items: navItem[];
  currentPage: string;
  onNavigate: (page: string) => void;
};


function BottomNavBar({items, currentPage, onNavigate}: BottomNavBarProps) {
  return (
    <div className='bottom-nav-bar'>
      {items.map((item) => (
        <button
          key={item.label}
          className={`nav-button ${currentPage === item.page ? 'active' : ''}`}
          onClick={() => onNavigate(item.page)}
          >
          {item.icon}
          <span>{item.label}</span>
          </button>
        ))}
    </div>
  );
}

export default BottomNavBar;
