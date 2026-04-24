import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import api from '../services/api';

const TVShows = () => {
  return (
    <div className="bg-[#141414] min-h-screen pb-12">
      <Navbar />
      <Banner />
      <div className="mt-[-80px] relative z-20">
        <Row title="Trending TV Shows" fetchURL={api.requestTVTrending} isLargeRow={true} />
        <Row title="Popular TV Shows" fetchURL={api.requestTVPopular} />
        <Row title="Top Rated TV" fetchURL={api.requestTVTopRated} />
        <Row title="Action & Adventure TV" fetchURL={api.requestTVAction} />
        <Row title="Comedy TV" fetchURL={api.requestTVComedy} />
      </div>
    </div>
  );
};

export default TVShows;