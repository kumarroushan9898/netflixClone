import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import api from '../services/api';

const NewPopular = () => {
  return (
    <div className="bg-[#141414] min-h-screen pb-12">
      <Navbar />
      <Banner />
      <div className="mt-[-80px] relative z-20">
        <Row title="Upcoming Movies" fetchURL={api.requestUpcoming} isLargeRow={true} />
        <Row title="Trending Right Now" fetchURL={api.requestTrending} />
        <Row title="Trending TV Shows" fetchURL={api.requestTVTrending} />
        <Row title="Popular Movies" fetchURL={api.requestPopular} />
      </div>
    </div>
  );
};

export default NewPopular;
