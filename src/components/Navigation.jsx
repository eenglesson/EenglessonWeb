import React, { useState, useEffect } from 'react';
import Button from './Buttons/Button';
import Hamburger from './Buttons/HamburgerNav';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true); // Controls visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks previous scroll position
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Work', 'About', 'Contact'];

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        // Scrolling down, hide the navigation
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show the navigation
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[80px] transition-transform duration-300 z-20 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container to limit width and ensure proper alignment */}
        <div className='w-full max-w-[1800px] mx-auto px-[16px] md:px-[64px] relative h-full'>
          <section className='w-full flex items-center justify-between h-full'>
            <h1 className='text-h2 font-medium cursor-default'>Eenglesson</h1>

            {/* Centered nav */}
            <nav className='absolute left-1/2 transform -translate-x-1/2'>
              <ul className='flex gap-8 cursor-pointer'>
                {menuItems.map((name, index) => (
                  <li
                    className='list-none text-h4 hover:text-dark50 duration-200'
                    key={index}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </nav>

            <Button text={'Remix'} />
          </section>
        </div>
      </header>
    </>
  );
}
