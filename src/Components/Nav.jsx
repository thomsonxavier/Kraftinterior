import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import logo from '../assets/logo/logo-color.png';
import { Link } from "react-router-dom";
import logob from '../assets/logo/logo-no-background.svg'
import { useEffect, useState } from 'react';

function Nav({ isDarkMode, toggleDarkMode }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  const navStyle = {
    position: isFixed ? 'fixed' : 'relative',
    top: isFixed ? '0' : 'auto',
    transition: 'top 0.3s ease-in-out',
    zIndex: 20,
    boxShadow: isFixed ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    background:isFixed ? '#ffffff' : '' ,
    color:isFixed ? 'black' : '#b8b5b5' ,
    
  };
  

  return (
    <nav
      className={`nav w-full text-black bg-transparent ${isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`}
      style={{
        ...navStyle,
        paddingTop: isFixed ? '5px' : '0',
        
        
        
        
      }}
    >
      <div className="container px-4 py-3 max-w-5xl mx-auto ">
        <div className="flex justify-between items-center">
        <div className="h-10 flex items-center justify-between w-full">
  <Link to="/" className="flex items-center"> 
    <img src={logob} alt="" className="h-full w-20" />
    {/* <span className="ml-2"> 
      Kraft <br/>
      Interiors
    </span> */}
  </Link>
</div>


          <div>
            <ul className="flex gap-x-5">
              <Link to="/" className="hover:text-blue-500 transition-colors duration-300">
                Home
              </Link>
              <Link to="/service" className="hover:text-blue-500 transition-colors duration-300">
                Service
              </Link>
              <Link to="/about" className="hover:text-blue-500 transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-500 transition-colors duration-300">
                Contact
              </Link>
            </ul>
          </div>

          {/* <button onClick={toggleDarkMode}>
            {isDarkMode ? <FiSun /> : <RiMoonClearLine />}
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
