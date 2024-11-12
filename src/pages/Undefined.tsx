import React from 'react';
import { Link } from 'react-router-dom';

const Undefined = () => {
  return (
    <div
      className="h-screen flex gap-4 flex-col justify-center items-center 
     bg-[rgb(23,23,23)] text-white"
    >
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className='text-3xl'>Oops! Page not found.</h2>
      <p className='text-xl'>
        Go back to the <Link to={'/'} className='text-purple-400'>Home page 🔙 </Link>
      </p>
    </div>
  );
};

export default Undefined;
