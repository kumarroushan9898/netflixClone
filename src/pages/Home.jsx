import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import api from '../services/api';

const Home = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  // Function to load watched movies from localStorage
  const loadWatchedMovies = () => {
    const saved = localStorage.getItem('watchedMovies');
    if (saved) {
      setWatchedMovies(JSON.parse(saved));
    }
  };

  useEffect(() => {
    // Initial load
    loadWatchedMovies();

    // Listen to custom event fired when a movie is added to the watched list
    window.addEventListener('watchedMoviesUpdated', loadWatchedMovies);

    // Cleanup
    return () => {
      window.removeEventListener('watchedMoviesUpdated', loadWatchedMovies);
    };
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen pb-12">
      <Navbar />
      <Banner />
      
      <div className="mt-[-80px] relative z-20">
        <Row 
          title="NETFLIX ORIGINALS" 
          fetchURL={api.requestPopular} 
          isLargeRow={true} 
        />
        
        {/* Render Watched Row only if there are watched movies */}
        {watchedMovies.length > 0 && (
          <Row 
            title="Recently Watched" 
            customMovies={watchedMovies} 
          />
        )}
        
        <Row title="Trending Now" fetchURL={api.requestTrending} />
        <Row title="Top Rated" fetchURL={api.requestTopRated} />
        <Row title="Action Movies" fetchURL={api.requestAction} />
        <Row title="Comedy Movies" fetchURL={api.requestComedy} />
        <Row title="Horror Movies" fetchURL={api.requestHorror} />
        <Row title="Upcoming" fetchURL={api.requestUpcoming} />
      </div>
    </div>
  );
};

export default Home;
