import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

const MyList = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  const loadWatchedMovies = () => {
    const saved = localStorage.getItem('watchedMovies');
    if (saved) {
      setWatchedMovies(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadWatchedMovies();
    window.addEventListener('watchedMoviesUpdated', loadWatchedMovies);
    return () => window.removeEventListener('watchedMoviesUpdated', loadWatchedMovies);
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-12">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">My List</h1>
        {watchedMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {watchedMovies.map((movie) => (
              <div key={movie.id} className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`}
                  alt={movie?.title || movie?.name}
                  className="w-full h-auto object-cover rounded-md aspect-[2/3]"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">You haven't added any movies or TV shows to your list yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyList;