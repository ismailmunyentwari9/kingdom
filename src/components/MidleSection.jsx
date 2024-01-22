import React from 'react';

const MidleSection = () => (
  <div className="W-full bg-gray-600 p-5 flex items-center  ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 container mx-auto w-11/12">
      <div className="flex flex-col col-span-1  border-2 border-gray-500  rounded-lg p-3">
        <p className="text-center text-[50px]"><i className="fas fa-graduation-cap " /></p>
        <p className="text-lg">
          Do you want to be challenged
          by great teachers who will
          expect much of you? Are you
          ready to discover your leadership
          potential and impact your community?
          Learn more about how to apply
          to our school.
        </p>
      </div>

      <div className="col-span-1 border-2 border-gray-500  rounded-lg p-3 ">
        <p className="text-center text-[50px]"><i className="fas fa-school" /></p>
        <p className="text-lg">
          Do you want to be challenged
          by great teachers who will
          expect much of you? Are you
          ready to discover your leadership
          potential and impact your community?
          Learn more about how to apply
          to our school.
        </p>
      </div>

      <div className="col-span-1 border-2 border-gray-500  rounded-lg p-3 ">
        <p className="text-center text-[50px]"><i className="fas fa-chart-pie" /></p>
        <p className="text-lg">
          Do you want to be challenged
          by great teachers who will
          expect much of you? Are you
          ready to discover your leadership
          potential and impact your community?
          Learn more about how to apply
          to our school.
        </p>
      </div>

    </div>
  </div>
);

export default MidleSection;
