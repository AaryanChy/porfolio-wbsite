import React from "react";
import Aws from "../assets/aws.png";
import Github from "../assets/github.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import ReactIcon from "../assets/react.png";
import Node from "../assets/node.png";

const Experience = () => {
  return (
    <div name='skills' className='w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>
        <div className='max-w-md mt-2 '>
          <p className='text-4xl font-bold border-b-4 border-pink-600'>
            Experience
          </p>
          <p className='text-md py-2'>
            These are the technologies I have skills on.
          </p>
        </div>
        {/* container for all the icons */}
        <div className='w-full grid grid-cols-2 gap-5 sm:grid-cols-4 text-center py-24 mb-8 -my-20'>
          <div className='shadow-md shadow-black hover:scale-110 duration-700  border rounded-2xl'>
            <img src={Html} className=' w-20 mx-auto py-4' alt='html Logo' />
            <p>Html</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img src={Css} className=' w-20 mx-auto py-4' alt='html Logo' />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img
              src={JavaScript}
              className=' w-20 mx-auto py-4'
              alt='html Logo'
            />
            <p>JavaScript</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img
              src={ReactIcon}
              className=' w-20 mx-auto py-4'
              alt='html Logo'
            />
            <p>React</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img
              src={Tailwind}
              className=' w-20 mx-auto py-4'
              alt='html Logo'
            />
            <p>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img src={Github} className=' w-20 mx-auto py-4' alt='html Logo' />
            <p>Git Hub</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img src={Node} className=' w-20 mx-auto py-4' alt='html Logo' />
            <p>Node.js</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-700 border rounded-2xl'>
            <img src={Aws} className=' w-20 mx-auto py-4' alt='html Logo' />
            <p>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
