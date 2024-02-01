import React from 'react';

const MiddleBlog = () => (
  <div className="MiddleBlog w-full lg:h-[80vh] h-[50vh] grid grid-cols-2 ">
    <div className=" col-span-2 lg:col-span-2 lg:w-[70%] ml-10 mt-[20%]">
      <p className="text-[2rem] lg:text-[3rem] text-white font-bold animate-bounce italic">
        <i className="fas fa-quote-left ml-2 text-black" />
        {' '}
        Welcome To  KingDom Of Salomon School Blog Section
        <i className="fas fa-quote-right ml-2 text-black" />
      </p>

    </div>
  </div>
);

export default MiddleBlog;
