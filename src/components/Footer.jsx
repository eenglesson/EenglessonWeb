import React from 'react';
import Button from './Buttons/Button';

export default function Footer() {
  const menuItems = ['Home', 'Work', 'About', 'Contact'];

  return (
    <>
      <section className='flex flex-col w-full max-w-[1800px] pt-[120px] pb-6 sm:pt-[120px] '>
        <div className='bg-black flex  h-fit w-full flex-col sm:flex-row gap-[64px] justify-between'>
          <aside className='flex flex-col gap-10'>
            <h3 className='text-bodyDefault text-white'>Contact</h3>
            <p className='text-h2 md:text-h1 lg:text-display text-white '>
              Let's start creating together
            </p>
            <Button text={`Let's talk`} big white arrow />
          </aside>
          <aside className='flex w-fit gap-[32px] md:gap-[64px] shrink-0'>
            <div className='flex flex-col  gap-4'>
              {menuItems.map((item, i) => (
                <li className='text-white cursor-pointer list-none text-h4'>
                  {item}
                </li>
              ))}
            </div>
            <div className='flex flex-col  gap-4'>
              <li className='text-white cursor-pointer list-none text-h4 '>
                Twitter
              </li>
              <li className='text-white cursor-pointer list-none text-h4 '>
                LinkedIn
              </li>
              <li className='text-white cursor-pointer list-none text-h4 '>
                Instagram
              </li>
            </div>
          </aside>
        </div>
        <p className='text-dark50 mt-[64px] sm:mt-[px]'>
          2024 Eenglesson crafted with love by Me.
        </p>
      </section>
    </>
  );
}
