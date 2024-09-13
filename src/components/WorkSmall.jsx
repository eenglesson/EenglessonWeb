import React from 'react';
import TiltedButton from './Buttons/TiltedButton';

export default function WorkSmall({ imageSrc, title }) {
  return (
    <>
      <section className='flex flex-col gap-6 w-full'>
        <aside
          className='group relative flex flex-col w-full h-[300px] md:h-[500px] 
         bg-grey05 rounded-[32px] overflow-hidden cursor-pointer '
        >
          <div className='flex justify-center items-center w-full h-full hover: '>
            <img
              src={imageSrc}
              alt={title}
              className='w-full h-full object-cover rounded-[16px] transition-transform duration-300 ease-in-out group-hover:scale-110'
            />
          </div>
          <div className='hidden md:block absolute left-4 bottom-4'>
            <TiltedButton />
          </div>
        </aside>
        <h3 className='text-h4 text-dark70'>{title}</h3>
        <p className='text-h3'>Fintech Dello Banking App</p>
      </section>
    </>
  );
}
