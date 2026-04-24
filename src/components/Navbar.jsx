import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  const checkUser = () => {
    const savedUser = localStorage.getItem('netflix_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('authChange', checkUser);
    return () => window.removeEventListener('authChange', checkUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-gray-300 hover:text-white';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${searchInput}`);
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('netflix_user');
    window.dispatchEvent(new Event('authChange'));
    navigate('/login');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <h1 
            onClick={() => navigate('/')}
            className="text-red-600 text-2xl md:text-4xl font-bold cursor-pointer uppercase tracking-wider"
          >
            Netflix
          </h1>
          <ul className="hidden md:flex items-center gap-4 text-sm">
            <Link to="/">
              <li className={`cursor-pointer transition ${isActive('/')}`}>Home</li>
            </Link>
            <Link to="/tv-shows">
              <li className={`cursor-pointer transition ${isActive('/tv-shows')}`}>TV Shows</li>
            </Link>
            <Link to="/movies">
              <li className={`cursor-pointer transition ${isActive('/movies')}`}>Movies</li>
            </Link>
            <Link to="/new-popular">
              <li className={`cursor-pointer transition ${isActive('/new-popular')}`}>New & Popular</li>
            </Link>
            <Link to="/my-list">
              <li className={`cursor-pointer transition ${isActive('/my-list')}`}>My List</li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-white">
          
          {/* Expandable Search */}
          <div className={`flex items-center transition-all duration-300 ${showSearch ? 'border border-white bg-black/50 px-2 py-1 rounded' : ''}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              className="w-5 h-5 cursor-pointer hidden md:block"
              onClick={toggleSearch}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <form onSubmit={handleSearch}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Titles, people, genres"
                className={`bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-in-out ${
                  showSearch ? 'w-48 opacity-100 ml-2 px-2' : 'w-0 opacity-0'
                }`}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onBlur={() => {
                  if (!searchInput) setShowSearch(false);
                }}
              />
            </form>
          </div>

          <p className="hidden md:block text-sm cursor-pointer">Kids</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer hidden md:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          
          {user ? (
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-blue-600 overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" className="w-full h-full object-cover" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              {/* Profile Dropdown */}
              <div className="absolute right-0 top-8 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-black/90 border border-gray-800 w-48 py-2 rounded-md shadow-xl flex flex-col">
                  <div className="px-4 py-3 border-b border-gray-800">
                    <p className="text-sm font-medium text-white truncate">{user.email}</p>
                  </div>
                  <div 
                    onClick={() => navigate('/my-list')}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:underline cursor-pointer"
                  >
                    My List
                  </div>
                  <div className="border-t border-gray-800 mt-2 pt-2">
                    <div 
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm font-bold text-center text-white hover:underline cursor-pointer"
                    >
                      Sign out of Netflix
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white text-sm hover:bg-red-700 transition font-medium">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;