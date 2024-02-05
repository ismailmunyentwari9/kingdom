import React from 'react';

const Missions = () => (
  <div>
    <div className="mx-auto w-full flex lg:flex-row flex-col justify-center mt-4">
      <div className="flex flex-col items-center">
        <p><span className="fa fa-globe text-gray-600 text-[6rem]" /></p>
        <p className="font-bold text-3xl mt-4">Our Mission</p>
        <p className="lg:w-[50%] md:w-[75%] w-[90%] text-start italic">

          In the esteemed Kingdom of Salomon,
          our mission is to cultivate a transformative
          educational experience that empowers individuals
          to reach their fullest potential and contribute
          meaningfully to the world.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p><span className="fas fa-paw text-gray-600 text-[6rem]" /></p>
        <p className="font-bold text-3xl mt-4">Our Vission</p>
        <p className="lg:w-[50%] md:w-[75%] w-[90%] text-start italic">
          At the Kingdom of Salomon,
          we envision a dynamic and inclusive
          learning realm where every student
          is empowered to embark on a transformative
          journey of discovery, innovation,
          and compassionate leadership.
        </p>
      </div>
    </div>
  </div>
);

export default Missions;
