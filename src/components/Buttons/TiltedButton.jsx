import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function TiltedButton({ text }) {
  return (
    <button
      className='group-hover:flex w-fit h-fit py-2 px-3 bg-grey30 text-white rounded-full transform 
      -rotate-45 group-hover:bg-primaryWhite group-hover:text-primaryBlack duration-300 group-hover:rotate-0 
      group-hover:py-3 group-hover:px-3'
    >
      <HiArrowRight size={30} className='transition-transform duration-300 ' />
    </button>
  );
}
