import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Button({ text, big, arrow, grey, white }) {
  const sizeClass = big ? 'py-4 px-8' : 'py-2 px-4';

  const colorClass = grey
    ? 'bg-grey05 text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
    : white
    ? 'bg-white text-primaryBlack hover:bg-primaryWhite hover:border-primaryBlack'
    : 'bg-primaryBlack text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack border-primaryBlack';

  return (
    <button
      className={`group flex items-center gap-2 w-fit h-fit rounded-[64px] border duration-300  
        ${sizeClass} ${colorClass}`}
    >
      {text}
      {arrow && (
        <HiArrowUpRight
          size={18}
          className='transition-transform duration-300 group-hover:rotate-45'
        />
      )}
    </button>
  );
}
