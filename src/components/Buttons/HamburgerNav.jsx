import React, { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = ['Work', 'About', 'Contact'];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
      type: 'spring',
      stiffness: 600, // Controls the stiffness of the spring
      damping: 40,
      delay: 0,
    },
  },
};

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between h-[80px] w-full'>
      <h1 className='text-h2 flex items-center'>Eenglesson</h1>
      <button className='relative inline-block z-40 bg-none cursor-pointer'>
        <aside
          className='hamburger-icon flex flex-col justify-center cursor-pointer w-[28px] h-[22px]'
          onClick={toggleHamburger}
        >
          <span
            className={`w-full h-[2px] bg-black transform translate-y-[-3px] rounded-full transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-[5px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`w-full h-[2px] bg-black translate-y-[3px] rounded-full transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-y-[-3px] -rotate-45' : ''
            }`}
          ></span>
        </aside>
      </button>
      <ul
        className={`absolute left-0 w-full flex flex-col py-[100px] pl-[16px] gap-6 rounded-2xl bg-customLight transition-all duration-[300ms] ease ${
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
          >
            {name}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
