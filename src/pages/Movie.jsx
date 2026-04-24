import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import api from '../services/api';

const Movies = () => {
  return (
    <div className="bg-[#141414] min-h-screen pb-12">
      <Navbar />
      <Banner />
      <div className="-mt-20 relative z-20">
        <Row title="Trending Movies" fetchURL={api.requestMoviesTrending} isLargeRow={true} />
        <Row title="Top Rated Movies" fetchURL={api.requestTopRated} />
        <Row title="Action Movies" fetchURL={api.requestAction} />
        <Row title="Comedy Movies" fetchURL={api.requestComedy} />
        <Row title="Horror Movies" fetchURL={api.requestHorror} />
      </div>
    </div>
  );
};

export default Movies;