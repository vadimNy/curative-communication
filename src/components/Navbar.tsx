import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Join Our Team', path: '/join' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo - using the original logo.png */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img src="/logo.png" className="h-16 w-16 sm:h-20 sm:w-20 object-contain group-hover:scale-105 transition-transform duration-300" alt="Curative Communication Logo" />
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Curative <span className="text-teal-600 font-semibold">Communication</span>
              </span>
              <span className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">NY Licensed Teletherapy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 relative py-2 ${
                  location.pathname === item.path
                    ? 'text-teal-600 font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-teal-600 transition-all duration-300 shadow-sm"
            >
              Book Evaluation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-teal-50/75 text-teal-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-teal-600 text-white rounded-xl font-semibold shadow-sm hover:bg-teal-700 transition-all"
            >
              Book Evaluation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
