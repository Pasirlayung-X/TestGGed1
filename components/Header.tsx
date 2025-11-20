import React, { useState } from 'react';
import type { User } from '@supabase/supabase-js';
import type { Page } from '../App';

interface HeaderProps {
  user: User;
  activePage: Page;
  onNavigate: (main: Page['main'], sub?: string) => void;
}

const DropdownArrow: React.FC<{ open: boolean }> = ({ open }) => (
    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);


const NavItem: React.FC<{
  page: Page['main'];
  activePage: Page;
  onClick: (page: Page['main']) => void;
  children: React.ReactNode;
}> = ({ page, activePage, onClick, children }) => {
  const isActive = page === activePage.main;
  const activeClasses = "text-emerald-600 font-semibold";
  const inactiveClasses = "text-gray-600 hover:text-emerald-600";

  return (
    <button
      onClick={() => onClick(page)}
      className={`px-3 py-2 text-sm transition-colors duration-200 flex items-center ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ user, activePage, onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdowns = {
    grk: [
      { sub: 'definisi', label: 'Gas Rumah Kaca' },
      { sub: 'penyebab', label: 'Penyebab' },
      { sub: 'efek', label: 'Efek' },
      { sub: 'data', label: 'Data-data' },
    ],
    metana: [
      { sub: 'definisi', label: 'Metana' },
      { sub: 'efek', label: 'Efeknya' },
      { sub: 'fungsi', label: 'Fungsi & Manfaat' },
      { sub: 'data', label: 'Data-data' },
    ],
    solusi: [
      { sub: 'peternak', label: 'Sebagai Peternak' },
      { sub: 'sesama', label: 'Sebagai Sesama' },
    ]
  };

  const handleMainPageClick = (page: Page['main']) => {
    switch (page) {
      case 'grk':
        onNavigate('grk', 'definisi');
        break;
      case 'metana':
        onNavigate('metana', 'definisi');
        break;
      case 'solusi':
        onNavigate('solusi', 'peternak');
        break;
      default:
        onNavigate(page);
    }
  };


  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('beranda')}>
            <h1 className="block text-xl md:text-2xl font-bold text-gray-800">
              GG-ed
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem page="beranda" activePage={activePage} onClick={() => onNavigate('beranda')}>Beranda</NavItem>
            
            {Object.keys(dropdowns).map(key => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavItem page={key as Page['main']} activePage={activePage} onClick={() => handleMainPageClick(key as Page['main'])}>
                  <span className="capitalize">{key === 'grk' ? 'GRK' : key}</span>
                  <DropdownArrow open={openDropdown === key} />
                </NavItem>
                {openDropdown === key && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1">
                    {dropdowns[key as keyof typeof dropdowns].map(item => (
                       <button
                        key={item.sub}
                        onClick={() => {
                          onNavigate(key as Page['main'], item.sub);
                          setOpenDropdown(null);
                        }}
                        className={`text-left w-full px-4 py-2 text-sm transition-colors duration-200 ${activePage.main === key && activePage.sub === item.sub ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <button
              onClick={() => onNavigate('checklist')}
              className={`ml-4 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${activePage.main === 'checklist' ? 'bg-amber-400 text-gray-900 shadow-md' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
            >
              Checklist Harian
            </button>
          </nav>

          <div className="flex items-center">
             {/* The theme toggler has been removed. */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;