import React from 'react';

const MiddleHome = () => (
  <div className="MiddleHome w-full lg:h-[80vh] h-[50vh] grid grid-cols-2 ">
    <div className=" col-span-2 lg:col-span-2 ml-10 mt-[20%]">
      <p className="text-[2rem] lg:text-[4rem] w-[70%] font-bold animate-bounce italic">
        <i className="fas fa-quote-left ml-2" />
        {' '}
        Wellcome To Our School
        <i className="fas fa-quote-right ml-2" />
      </p>
      <p className=" text-[1.5rem] lg:text-[3rem]  text-white border-b-2 w-[40%] border-gray-200 font-bold animate-bounce">KINGDOM OF SALOMON</p>
    </div>
  </div>
);

export default MiddleHome;
