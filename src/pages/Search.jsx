import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`${api.requestSearch}${query}`)
        .then((response) => response.json())
        .then((data) => {
          // Filter out people, we only want movies and tv shows
          const results = data.results.filter(
            item => item.media_type === 'movie' || item.media_type === 'tv'
          );
          setMovies(results);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [query]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-12 pb-12">
        <h1 className="text-gray-400 text-xl mb-8">
          Search results for: <span className="text-white font-bold">{query}</span>
        </h1>
        
        {loading ? (
          <div className="flex justify-center mt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {movies.map((movie) => {
              if (!movie.backdrop_path && !movie.poster_path) return null;
              return (
                <div 
                  key={movie.id} 
                  className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => handleMovieClick(movie)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`}
                    alt={movie?.title || movie?.name}
                    className="w-full h-auto object-cover rounded-md aspect-[2/3]"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-400 text-lg text-center mt-20">No matching results found.</p>
        )}
      </div>

      {isModalOpen && (
        <MovieCard 
          movie={selectedMovie} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Search;