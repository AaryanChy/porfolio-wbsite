import React from "react";

const Contact = () => {
  return (
    <div
      name='contact'
      className=' w-full h-screen flex justify-center items-center p-4'
    >
      <form
        action='https://getform.io/f/c2ba41c9-1361-441d-bc68-159ca251077e'
        method='POST'
        className='flex flex-col  max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline-block border-b-4 w-1/2 border-pink-600'>
            Contact
          </p>
          <p className='text-gray-600 p-4'>
            Submit the form below or shoot me an email -
            aaryanchaudhary188@gmail.com
          </p>
        </div>
        {/* Name input field */}
        <input
          className='p-2 bg-slate-200'
          type='text'
          placeholder='Name'
          name='nameInput'
        />
        <input
          className='my-4 p-2  bg-slate-200'
          type='email'
          placeholder='Email (e.g:xyz@gmail.com)'
          name='emailInput'
        />
        <textarea
          className='p-2  bg-slate-200'
          name='message'
          cols='30'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-center border-2 border-slate-700 w-[200px] animate-shake hover:rounded-lg hover:bg-slate-600 hover:text-white duration-300 px-4 my-8 mx-auto'>
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
