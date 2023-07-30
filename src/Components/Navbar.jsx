import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import ClearIcon from "@mui/icons-material/Clear";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed w-full h-[1.5rem] flex bg-slate-600 text-2xl justify-between items-center px-4 py-10 text-gray-900 md:justify-center'>
      {/* <div className='toggleButton'>
        <button>
          <ReorderIcon />
        </button>
      </div> */}
      <div className='absolute left-0 m-2 pb-6'>
        <img src={Logo} alt='Logo' style={{ width: "7rem" }} />
      </div>
      {/* Nav links */}
      <div className='hidden gap-10 md:flex text-white'>
        <Link
          activeClass='active'
          to='/home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='/projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>

      {/* hamburger */}
      <div
        className='md:hidden absolute right-0 px-5 z-10'
        onClick={handleClick}
      >
        {!nav ? <ReorderIcon /> : <ClearIcon />}
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen backdrop-blur font-bold md:hidden "
        }
      >
        <Link to='/' className='py-6 text-4xl'>
          Home
        </Link>
        <Link to='/projects' className='py-6 text-4xl'>
          Projects
        </Link>
        <Link to='/experience' className='py-6 text-4xl'>
          Experience
        </Link>
        <Link to='/contact' className='py-6 text-4xl'>
          Contact
        </Link>
        <Link to='/about' className='py-6 text-4xl'>
          About
        </Link>
      </div>

      {/* social Icons  */}

      <div className='hidden md:flex flex-col absolute top-[20rem] left-0'>
        <ul>
          <li>
            <Link
              to='/'
              className='py-10 text-4xl ml-[-8.5rem] hover:ml-[-0.15rem] duration-700'
            >
              LinkedIn <LinkedInIcon fontSize='large' />
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='py-8 text-4xl ml-[-6.7rem] hover:ml-[-0.15rem] duration-700'
            >
              Github <GitHubIcon fontSize='large' />
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='py-8 text-4xl ml-[-5.3rem] hover:ml-[-0.15rem] duration-700'
            >
              Email <EmailIcon fontSize='large' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
