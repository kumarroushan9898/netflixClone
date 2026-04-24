import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (props.customMovies) {
      setMovies(props.customMovies);
    } else if (props.fetchURL) {
      fetch(props.fetchURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [props.fetchURL, props.customMovies]);

  const slideLeft = () => {
    let slider = document.getElementById('slider-' + props.title);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider-' + props.title);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeMovieCard = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pl-4 md:pl-12 my-8 relative">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
        {props.title}
      </h2>
      
      <div className="relative flex items-center group">
        <button 
          className="absolute left-0 z-40 bg-black/50 text-white h-full px-2 hidden md:block opacity-0 group-hover:opacity-100"
          onClick={slideLeft}
        >
          {"<"}
        </button>

        <div 
          id={'slider-' + props.title}
          className="flex items-center gap-4 overflow-x-scroll scrollbar-hide py-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => {
            let imagePath = movie.poster_path;
            if (!imagePath) {
              imagePath = movie.backdrop_path;
            }
            
            if (!imagePath) {
              return null;
            }

            let movieTitle = movie.title;
            if (!movieTitle) {
              movieTitle = movie.name;
            }
            
            return (
              <div 
                key={index} 
                className="relative flex-none cursor-pointer hover:scale-105 w-[150px] md:w-[200px] transition duration-300"
                onClick={() => handleMovieClick(movie)}
              >
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + imagePath}
                  alt={movieTitle}
                  className="w-full h-full object-cover rounded-md aspect-[2/3]"
                />
              </div>
            );
          })}
        </div>

        <button 
          className="absolute right-0 z-40 bg-black/50 text-white h-full px-2 hidden md:block opacity-0 group-hover:opacity-100"
          onClick={slideRight}
        >
          {">"}
        </button>
      </div>

      {isModalOpen ? (
        <MovieCard 
          movie={selectedMovie} 
          onClose={closeMovieCard} 
        />
      ) : null}
    </div>
  );
}

export default Row;