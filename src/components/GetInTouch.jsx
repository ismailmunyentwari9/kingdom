import React from 'react';

const GetInTouch = () => (
  <div>

    <div className="w-[95%] mx-auto container p-12 flex flex-col items-center">
      <h1 className="font-bold font-mono lg:text-[3rem] text-[2rem]">GetIn Touch</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-4 md:col-span-1 lg:col-span-1 flex flex-col gap-5 bg-slate-300 rounded-xl border-2 border-black p-5 shadow-lg">
          <p className="">
            <span className="fa fa-location text-[2rem]  " />

          </p>

          <p>
            {' '}
            <p className="font-bold text-2xl text-slate-400">Location</p>
            <p className="font-bold">located in the heart of Gisenyi city, Rwanda</p>
          </p>
        </div>

        <div className="col-span-4 md:col-span-1 lg:col-span-1 flex flex-col gap-5 bg-slate-300 rounded-xl border-2 border-black p-5 shadow-lg">
          <p className="">
            <span className="fa fa-clock text-[2rem]   h-10 w-10 text-center rounded-full" />

          </p>

          <p>
            {' '}
            <p className="font-bold text-2xl text-slate-400">Open hours</p>
            <p className="font-bold">Monday-Sturday: 09:00 AM - 23:00 PM</p>
          </p>
        </div>

        <div className="col-span-4 md:col-span-1 lg:col-span-1 flex flex-col  gap-5 bg-slate-300 rounded-xl border-2 border-black p-5 shadow-lg">
          <p className="">
            <span className="fa fa-phone text-[2rem] " />

          </p>

          <div className="flex flex-col flex-wrap">
            <p className="font-bold text-2xl text-slate-400">Call</p>
            <p className="font-bold">+250785837748 / +250785630430</p>
          </div>
        </div>
      </div>
    </div>

    {/* Form for gettin in touch with us  */}

    <form action="" className="w-full mb-10 ">
      <div className="form-group flex lg:flex-row md:flex-row flex-col gap-10 w-[90%] container mx-auto">
        {/* eslint-disable*/}
        <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" className="form-control" placeholder="First Name" />
        </div>
        <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" className="form-control" placeholder="Last Name" />
        </div>
      </div>
      <div className="form-group flex lg:flex-row md:flex-row flex-col gap-10 w-[90%] mt-5 container mx-auto">
        {/* eslint-disable*/}
        <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full  ">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" className="form-control" placeholder="First Name" />
        </div>
        <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full">
        <label htmlFor="phone">Tel. Number:</label>
        <input type="number" id="phone" className="form-control" placeholder="Last Name" />
        </div>
      </div>

      <div className="form-group flex gap-10 w-[90%] mt-5 container mx-auto">
        {/* eslint-disable*/}
        <div className="flex flex-col w-full  ">
        <label htmlFor="message">Message</label>
        <textarea type="number" id="phone" className="form-control" placeholder="Leave Your Message"/>
        </div>
      </div>
    </form>

  </div>
);

export default GetInTouch;
