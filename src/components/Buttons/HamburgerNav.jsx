import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 800, // Controls the stiffness of the spring
      damping: 80,
      delay: 0,
    },
  },
};

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true); // När användaren klickar aktiveras animationerna
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.scrollY >= 100) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className='flex justify-between h-[80px] w-full px-[16px]'>
      <h1 className='text-h2 flex items-center'>Eenglesson</h1>
      <button className='relative inline-block z-40 bg-none cursor-default'>
        <aside
          className='flex flex-col justify-center gap-[6px] cursor-pointer w-[28px] h-[22px]'
          onClick={toggleHamburger}
        >
          {/* First Line */}
          <span
            className={`w-full h-[2px] bg-black rounded-full ${
              hasClicked
                ? isOpen
                  ? 'animate-line1Open'
                  : 'animate-line1Close'
                : ''
            }`}
          ></span>

          {/* Second Line */}
          <span
            className={`w-full h-[2px] bg-black rounded-full ${
              hasClicked
                ? isOpen
                  ? 'animate-line2Open'
                  : 'animate-line2Close'
                : ''
            }`}
          ></span>
        </aside>
      </button>
      <ul
        className={`absolute left-0 w-full flex flex-col py-[100px] pl-[16px] gap-6 rounded-b-2xl bg-customLight transition-all duration-[300ms] ease-in-out ${
          isOpen ? 'top-0' : 'top-[-100%]'
        }`}
        style={{
          top: isOpen ? '0' : '-100%',
        }}
      >
        {menuItems.map((name, index) => (
          <motion.li
            className='text-h2 cursor-pointer'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            onClick={() => setIsOpen(false)}
          >
            <Link to={name.path}>{name.name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
