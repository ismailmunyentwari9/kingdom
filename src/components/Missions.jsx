import React from 'react';

const Missions = () => (
  <div>
    <div className="mx-auto w-full flex lg:flex-row flex-col justify-center mt-4">
      <div className="flex flex-col items-center">
        <p><span className="fa fa-globe text-gray-600 text-[6rem]" /></p>
        <p className="font-bold text-3xl mt-4">Our Mission</p>
        <p className="lg:w-[50%] md:w-[75%] w-[90%] text-center italic">
          To passionately and purposefully educate and
          empower the young minds of
          Rwanda, fostering a transformative
          journey that enables girls to realize
          and achieve their highest potential.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p><span className="fas fa-paw text-gray-600 text-[6rem]" /></p>
        <p className="font-bold text-3xl mt-4">Our Vission</p>
        <p className="lg:w-[50%] md:w-[75%] w-[90%] text-center italic">
          To be a beacon of educational
          excellence in Rwanda, recognized
          for fostering a vibrant learning
          community where every girl is
          inspired to dream, equipped
          to excel, and empowered to lead.
        </p>
      </div>
    </div>
  </div>
);

export default Missions;
