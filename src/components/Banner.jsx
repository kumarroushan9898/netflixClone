import React, { useState, useEffect } from 'react';
import api from '../services/api';
import MovieCard from './MovieCard';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(api.requestTrending)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      })
      .catch((error) => console.log(error));
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  let movieTitle = movie.title;
  if (!movieTitle) {
    movieTitle = movie.name;
  }

  let movieDescription = movie.overview;
  if (movieDescription && movieDescription.length > 150) {
    movieDescription = movieDescription.slice(0, 150) + "...";
  }

  return (
    <div className="w-full h-[600px] text-white relative">
      <div className="w-full h-full">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
          alt={movieTitle}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute w-full top-[20%] p-4 md:p-16 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {movieTitle}
          </h1>
          
          <div className="my-4 flex gap-4">
            <button 
              className="bg-white text-black px-6 py-2 rounded font-bold"
            >
              Play
            </button>
            <button 
              onClick={openModal}
              className="bg-gray-500 text-white px-6 py-2 rounded font-bold"
            >
              More Info
            </button>
          </div>
          
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movieDescription}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#141414] to-transparent"></div>

      {isModalOpen ? (
        <MovieCard 
          movie={movie} 
          onClose={closeModal} 
        />
      ) : null}
    </div>
  );
}

export default Banner;
