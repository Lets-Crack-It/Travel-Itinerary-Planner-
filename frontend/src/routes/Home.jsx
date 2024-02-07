import React, { useEffect, useState } from 'react';
import NavBar from '../components/home/navigation_bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Home.css';

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className='main-div'>
      <NavBar scrolled={scrolled} />
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
    </div>
  );
};

export default Home;