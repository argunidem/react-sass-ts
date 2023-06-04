import { HiMenuAlt4, HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import MenuNavigation from './MenuNavigation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const headerActive = () => {
      const header = document.querySelector('.header') as HTMLElement;

      window.scrollY > 20
        ? header.classList.add('active')
        : header.classList.remove('active');
    };

    window.addEventListener('scroll', headerActive);

    return () => window.removeEventListener('scroll', headerActive);
  }, []);

  return (
    <>
      <header className='header'>
        <nav className='container'>
          <div className='menuSearch'>
            <div
              className='menu_icon'
              onClick={() => setMenuToggle(true)}
            >
              <HiMenuAlt4 />
            </div>
            <FiSearch />
          </div>
          <Link
            to='/'
            className='logo'
          >
            minim
          </Link>
          <div className='accountAndCart'>
            <a href='#'>account</a>
            <HiOutlineShoppingBag />
          </div>
        </nav>
      </header>
      <MenuNavigation
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
      />
    </>
  );
}
export default Navbar;
