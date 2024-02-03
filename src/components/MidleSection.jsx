import React from 'react';

const MidleSection = () => (
  <div className="w-full bg-slate-100 p-5 flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 container mx-auto w-11/12">
      <div className="flex flex-col col-span-1 border-2 border-gray-500 rounded-lg p-3">
        <p className="text-center text-[50px]"><i className="fas fa-graduation-cap" /></p>
        <p className="text-lg">
          In the Kingdom of Salomon, education is not just a journey;
          it is a transformative odyssey. Our dedicated team
          of educators, akin to wise stewards, guide and
          inspire students to explore the realms of knowledge
        </p>
      </div>

      <div className="col-span-1 border-2 border-gray-500 rounded-lg p-3">
        <p className="text-center text-[50px]"><i className="fas fa-school" /></p>
        <p className="text-lg">
          In the nurturing embrace of our educational environment,
          a sanctuary is crafted where the seeds of knowledge bloom
          into the vibrant flowers of wisdom.At Kingdom Of Salomon, the air is
          charged with inspiration.
        </p>
      </div>

      <div className="col-span-1 border-2 border-gray-500 rounded-lg p-3">
        <p className="text-center text-[50px]"><i className="fas fa-chart-pie" /></p>
        <p className="text-lg">

          In the enchanting Kingdom of Salomon,
          we believe that the pursuit of knowledge
          is not just a serious endeavor but a joyful
          exploration. Here, the vibrant tapestry of
          education is woven with threads of laughter,
          curiosity, and the thrill of discovery.
        </p>
      </div>
    </div>
  </div>
);

export default MidleSection;
