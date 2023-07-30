import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className='w-full h-screen'>
      {/* Container  */}

      <div className=' flex flex-col w-full  px-7 md:flex justify-center md:items-center h-full'>
        <p className='text-2xl'>Hi, my name is</p>
        <h1
          className={`text-4xl sm:text-7xl font-bold transition-opacity duration-1000 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          Aaryan Chaudhary
        </h1>
        <h2 className='text-4xl sm:text-5xl  text-gray-500 py-4'>
          I'm a front-end Developer.
        </h2>
        <p className=' text-xl md:max-w-5xl md:text-xl md:px-4'>
          I'm a front-end developer specializing in building visually stunning
          and user-friendly web applications.
        </p>
        <div className='py-5'>
          <button className='group bg-transparent hover:bg-slate-600 hover:text-white py-2 px-4 font-bold border rounded hover:border-transparent duration-500'>
            View Work
            <ArrowForwardIcon className='ml-2 group-hover:rotate-90 transition-transform duration-1000' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
