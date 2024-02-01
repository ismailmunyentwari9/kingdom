import React from 'react';

const MiddleAbout = () => (
  <div className="MiddleAbout w-full lg:h-[80vh] h-[50vh] grid grid-cols-2 ">
    <div className=" col-span-2 lg:col-span-2 lg:w-[60%] ml-10 mt-[20%]">
      <p className="text-[2rem] lg:text-[4rem] text-white font-bold animate-bounce italic">
        <i className="fas fa-quote-left ml-2 text-black" />
        {' '}
        Welcome To See About Kingdom Of Salomon School
        <i className="fas fa-quote-right ml-2 text-black" />
      </p>

    </div>
  </div>
);

export default MiddleAbout;
