import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realState from "../assets/projects/realestate.jpg";

const Projects = () => {
  return (
    <div name='projects' className=' md:h-screen flex flex-col items-center '>
      {/* container */}
      <div className=' max-w-[1000px] md:w-full md:my-20 my-32 '>
        <div className='max-w-md p-3'>
          <p className='  text-4xl  border-b-4 border-pink-600'>Projects</p>
          <p className='py-2'>Checkout some of my recent works.</p>
        </div>

        {/* container for all the projects card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5 mx-4 overflow-hidden'>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300 text-white content-div'
            style={{ backgroundImage: `url(${WorkImg})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300  text-white content-div  '
            style={{ backgroundImage: `url(${realState})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300  text-white content-div  '
            style={{ backgroundImage: `url(${realState})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300  text-white content-div  '
            style={{ backgroundImage: `url(${realState})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300  text-white content-div  '
            style={{ backgroundImage: `url(${realState})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 group hover:scale-110 duration-300  text-white content-div  '
            style={{ backgroundImage: `url(${realState})` }}
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider '>
                Project Title
              </span>
              <div className='flex gap-5 items-center justify-center pt-20'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button1
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 bg-white text-gray-500 font-bold text-lg'>
                    Button2
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
