import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => (
  <div className="w-full bg-slate-400 pb-9 pt-7">
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
              <p>+250 781 950 819</p>
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
              <p><Link to="/">Home</Link></p>
            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/contacts">Contacts</Link></p>

            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/about">About</Link></p>

            </span>
          </p>
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/blogs">Blog</Link></p>
            </span>
          </p>
        </div>

      </div>

      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Support</p>
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/blogs">Special Events</Link></p>
            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/about">Students</Link></p>

            </span>
          </p>

          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/blogs">Achievements</Link></p>

            </span>
          </p>
          <p className="flex items-center gap-4">

            <span className="font-bold">
              <p><Link to="/blogs">Kingdom Of Salomon Blogs</Link></p>
            </span>
          </p>
        </div>

      </div>

      <div className="col-span-1">
        <p className="font-bold text-[2rem] text-white mb-5 ">Say Something To Us</p>
        <div className="flex flex-col gap-5">
          <form action="https://formspree.io/f/mrgnpaoy" method="POST" className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex flex-col gap-4">
              <input name="Email" className="border-2 rounded-lg border-gray-400 text-lg font-bold text-black" placeholder="Your Email" type="Email" />
              <textarea name="Message" className="border-2 rounded-lg border-gray-400 text-lg font-bold text-black" placeholder="Say Something" type="text" />
            </div>
            <button type="submit" className="border-2 border-white pl-9 pr-9 text-bold text-black text-2xl rounded-lg hover:bg-gray-500 hover:text-black">Send</button>
          </form>
        </div>

      </div>

    </div>

  </div>

);

export default Footer;
