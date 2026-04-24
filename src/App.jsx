import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NewPopular from './pages/NewPopular';
import MyList from './pages/MyList';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-[#141414] text-white min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new-popular" element={<NewPopular />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
