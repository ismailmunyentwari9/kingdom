import React from 'react';

const Footer = () => (
  <div className="w-full bg-gray-600 pb-9 pt-7">
    <div className="container mx-auto w-9/12 flex gap-12 flex-wrap">
      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Our contacts</p>
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-4">
            <span className="fa fa-location text-3xl" />
            <span className="font-bold">
              <p>Location</p>
              <p>Gisenyi,Rwanda</p>
            </span>
          </p>

          <p className="flex items-center gap-4">
            <span className="fa fa-phone text-3xl" />
            <span className="font-bold">
              <p>Phone</p>
              <p>+250 785 837 748</p>
            </span>
          </p>

          <p className="flex items-center gap-4">
            <span className="fa fa-location text-3xl" />
            <span className="font-bold">
              <p>Location</p>
              <p>Gisenyi,Rwanda</p>
            </span>
          </p>
        </div>

      </div>

      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Quick Links</p>
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Home</p>
            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Contacts</p>

            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>About</p>

            </span>
          </p>
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Blogs</p>
            </span>
          </p>
        </div>

      </div>

      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Support</p>
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Special Events</p>
            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Students</p>

            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Achievements</p>

            </span>
          </p>
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p>Kingdom Of Salomon Blogs</p>
            </span>
          </p>
        </div>

      </div>

      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Say Something To Us</p>
        <div className="flex flex-col gap-5">
          <form action="" className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex flex-col gap-4">
              <input className="border-2 rounded-lg border-gray-400 text-lg font-bold text-black" placeholder="Your Email" type="Email" name="email" />
              <textarea className="border-2 rounded-lg border-gray-400 text-lg font-bold text-black" placeholder="Say Something" type="text" name="message" />
            </div>
            <button type="submit" className="border-2 border-white pl-9 pr-9 text-bold text-black text-2xl rounded-lg hover:bg-gray-500 hover:text-black">Send</button>
          </form>
        </div>

      </div>

    </div>

  </div>

);

export default Footer;
