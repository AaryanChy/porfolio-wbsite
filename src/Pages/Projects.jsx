import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";

const Projects = () => {
  return (
    <div name='projects' className='md:h-screen flex flex-col items-center '>
      {/* container */}
      <div className=' max-w-[1000px] md: w-full my-32'>
        <div className='max-w-md p-3'>
          <p className='  text-4xl  border-b-4 border-pink-600'>Projects</p>
          <p className='py-2'>Checkout some of my recent works.</p>
        </div>

        {/* container for all the projects card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5 mx-4'>
          <div
            className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500 text-white content-div'
            style={{ backgroundImage: `url(${WorkImg})` }}
          >
            <span>Project Title</span>
            <div>
              <a href=''>
                <button>Button1</button>
              </a>
              <a href=''>
                <button>Button2</button>
              </a>
            </div>
          </div>
          <div className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500'>
            Car 1
          </div>
          <div className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500'>
            Car 1
          </div>
          <div className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500'>
            Car 1
          </div>
          <div className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500'>
            Car 1
          </div>
          <div className='shadow-md shadow-black border rounded-lg p-9 hover:scale-110 duration-500'>
            Car 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
