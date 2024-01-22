import React from 'react';

const Ourbelief = () => (
  <div>
    <div className="mx-auto w-full flex flex-col bg-slate-400 pt-9 pb-9">
      <h1 className="self-center w-[60%] text-center font-bold text-[1rem] lg:text-[3rem] md:text-[2rem]  italic">
        <span className="italic color-gray-600">--</span>
        {' '}
        OUR CORE BELIEF
        {' '}
        <span className="italic color-gray-600">--</span>
      </h1>
      <p className="self-center w-[60%] font-bold lg:text-3xl md:text-2xl text-lg text-white">
        At Kingdom Solomon School,
        {' '}
        <span className="bg-yellow-500">we champion the notion</span>
        {' '}
        that education is
        a universal birthright, a cornerstone accessible to every individual,
        {' '}
        <span className="bg-yellow-500">transcending</span>
        {' '}

        socio-economic barriers.
      </p>
    </div>
  </div>
);

export default Ourbelief;
