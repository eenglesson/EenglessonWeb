import { useEffect, useState } from 'react';
import Button from './Buttons/Button';

export default function Navigation() {
  const menuItems = ['Home', 'Work', 'About', 'Contact'];
  const [isVisible, setIsVisible] = useState(true); // Controls visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks previous scroll position

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
        <div className='w-full max-w-[1800px] mx-auto px-[16px] h-full'>
          <section className='w-full flex items-center justify-between h-full'>
            <h1 className=' text-h2 font-medium cursor-default'>Englesson</h1>

            {/* Centered nav */}
            <nav className='flex'>
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

            <div className='flex md:w-[174.74px] justify-end'>
              <Button text={'Remix'} />
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
