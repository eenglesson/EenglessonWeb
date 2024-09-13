import React from 'react';
import sofaImg from '../assets/sofa.webp';
import PenImg from '../assets/pens.webp';
import TiltedButton from './Buttons/TiltedButton';

export default function WorkBig() {
  return (
    <>
      <section className='flex flex-col gap-6 w-full'>
        <aside className='group relative flex flex-col w-full h-[300px] md:h-[500px] lg:h-[700px] bg-grey05 rounded-[32px] overflow-hidden cursor-pointer'>
          <div className='flex justify-center items-center w-full h-full '>
            <img
              src={sofaImg}
              alt='image'
              className='w-full h-full object-cover rounded-[16px] transition-transform duration-300 ease-in-out group-hover:scale-110'
            />
          </div>
          <div className='hidden md:block absolute left-4 bottom-5'>
            <TiltedButton text={'Show'} />
          </div>
        </aside>
        <h3 className='text-h4 text-dark70'>Fintech</h3>
        <p className='text-h3'>Fintech Dello Banking App</p>
      </section>
    </>
  );
}
