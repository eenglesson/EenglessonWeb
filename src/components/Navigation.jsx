import Button from './Buttons/Button';

export default function Navigation() {
  const menuItems = ['Home', 'Work', 'About', 'Contact'];

  return (
    <>
      <header
        className={
          'fixed top-0 left-0 w-full h-[80px] transition-transform duration-300 z-20 ease-in-out '
        }
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
