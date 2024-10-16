import React, { useState, useEffect } from 'react';
import HamburgerNav from '../components/Buttons/HamburgerNav';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function AboutPage() {
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
        <section className='flex flex-col gap-[128px] sm:mt-[200px] w-fit sm:gap-[192px] bg-white  relative mb-[240px]'>
          {isMobile ? <HamburgerNav /> : <Navigation />}
          <Hero />
        </section>
      </div>
      <footer className='flex bg-black w-screen flex-col px-[16px] items-center md:px-[64px] bottom-0'>
        <Footer />
      </footer>
    </>
  );
}

export default AboutPage;
