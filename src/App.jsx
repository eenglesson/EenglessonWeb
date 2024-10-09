import React, { useState, useEffect } from 'react';
import HamburgerNav from './components/Buttons/HamburgerNav';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Story from './components/Story';
import Succes from './components/Succes';
import WorkList from './components/WorkList';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // This function checks the window width and updates the state accordingly
  const handleResize = () => {
    setIsMobile(window.innerWidth < 640); // 640px is the "sm" breakpoint in Tailwind
  };

  // Add event listener on mount to track screen size and remove it on unmount
  useEffect(() => {
    handleResize(); // Call it once initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='relative flex justify-center bg-white mx-auto overflow-hidden'>
        <section className='flex flex-col gap-[140px] sm:mt-[200px] w-fit sm:gap-[240px] bg-white px-[16px] md:px-[16px] relative mb-[240px]'>
          {isMobile ? <HamburgerNav /> : <Navigation />}
          <Hero />
          <WorkList />
          <Succes />
          <Services />
          <Story />
        </section>
      </div>
      <footer className='flex bg-black w-screen flex-col px-[16px] items-center md:px-[64px] bottom-0'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
