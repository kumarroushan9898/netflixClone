import React, { useState, useEffect } from 'react';

function MovieCard(props) {
    const [trailerKey, setTrailerKey] = useState(null);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        if (!props.movie) {
            return;
        }

        let key = import.meta.env.VITE_TMDB_KEY;
        let type = "movie";
        if (props.movie.media_type === 'tv' || props.movie.name) {
            type = "tv";
        }
        
        let url = "https://api.themoviedb.org/3/" + type + "/" + props.movie.id + "?api_key=" + key + "&append_to_response=videos";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let videos = [];
                if (data.videos && data.videos.results) {
                    videos = data.videos.results;
                }

                let myTrailer = null;
                for (let i = 0; i < videos.length; i++) {
                    if (videos[i].type === 'Trailer' && videos[i].site === 'YouTube') {
                        myTrailer = videos[i];
                        break; 
                    }
                }
                
                if (myTrailer === null && videos.length > 0) {
                    myTrailer = videos[0];
                }

                if (myTrailer !== null) {
                    setTrailerKey(myTrailer.key);
                }

                if (data.genres) {
                    setGenres(data.genres);
                } else {
                    setGenres([]);
                }
            })
            .catch((error) => {
                console.log("Error:", error);
            });

        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [props.movie]);

    if (!props.movie) {
        return null;
    }

    const handleAddToList = () => {
        let savedWatched = localStorage.getItem('watchedMovies');
        let watchedList = [];
        if (savedWatched) {
            watchedList = JSON.parse(savedWatched);
        }
        
        let isAlreadyWatched = false;
        for (let i = 0; i < watchedList.length; i++) {
            if (watchedList[i].id === props.movie.id) {
                isAlreadyWatched = true;
            }
        }

        let movieTitle = props.movie.title;
        if (!movieTitle) {
            movieTitle = props.movie.name;
        }

        if (isAlreadyWatched === false) {
            watchedList.unshift(props.movie);
            localStorage.setItem('watchedMovies', JSON.stringify(watchedList));
            alert("Added " + movieTitle + " to your list!");
            window.dispatchEvent(new Event('watchedMoviesUpdated'));
        } else {
            alert(movieTitle + " is already in your list!");
        }
    };

    let releaseDate = props.movie.release_date;
    if (!releaseDate) {
        releaseDate = props.movie.first_air_date;
    }
    
    let year = "";
    if (releaseDate) {
        year = releaseDate.substring(0, 4);
    }

    let movieTitle = props.movie.title;
    if (!movieTitle) {
        movieTitle = props.movie.name;
    }

    let imagePath = props.movie.backdrop_path;
    if (!imagePath) {
        imagePath = props.movie.poster_path;
    }
    
    let genreString = "";
    for (let i = 0; i < genres.length; i++) {
        genreString = genreString + genres[i].name;
        if (i < genres.length - 1) {
            genreString = genreString + ", ";
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex justify-center items-center px-4 md:px-0">
            <div
                className="absolute inset-0 bg-black/70"
                onClick={props.onClose}
            ></div>

            <div className="relative bg-[#181818] w-full max-w-3xl max-h-[90vh] rounded-xl overflow-y-auto scrollbar-hide">
                <div className="absolute top-4 right-4 z-50">
                    <button
                        onClick={props.onClose}
                        className="p-2 bg-red-600 rounded-full text-white font-bold"
                    >
                        X
                    </button>
                </div>

                <div className="relative w-full h-[50vh]">
                    {trailerKey ? (
                        <div className="absolute inset-0">
                            <iframe 
                                src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerKey}
                                title="YouTube video"
                                className="w-full h-full pointer-events-none scale-150"
                            ></iframe>
                        </div>
                    ) : (
                        <img
                            src={"https://image.tmdb.org/t/p/original/" + imagePath}
                            alt={movieTitle}
                            className="w-full h-full object-cover"
                        />
                    )}

                    <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#181818] to-transparent"></div>

                    <div className="absolute bottom-10 left-8">
                        <h1 className="text-white text-3xl font-bold mb-6">
                            {movieTitle}
                        </h1>
                        <div className="flex gap-4">
                            <button className="bg-white text-black px-8 py-2 rounded font-bold">
                                Play
                            </button>
                            <button
                                onClick={handleAddToList}
                                className="bg-gray-600 px-4 py-2 rounded text-white font-bold"
                            >
                                + Add to List
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-8 text-white flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex gap-3 mb-4 text-sm font-bold">
                            <span className="text-green-500">95% Match</span>
                            <span>{year}</span>
                            <span className="border px-1 rounded">HD</span>
                        </div>
                        <p className="text-gray-300">
                            {props.movie.overview}
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 text-sm text-gray-400 space-y-4">
                        {genres.length > 0 ? (
                            <div>
                                <span>Genres: </span>
                                <span className="text-white">{genreString}</span>
                            </div>
                        ) : null}
                        <div>
                            <span>Language: </span>
                            <span className="text-white uppercase">{props.movie.original_language}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
