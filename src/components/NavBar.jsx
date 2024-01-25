import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from './images/logo.png';

const NavBar = () => (
  <div className="grid grid-cols-2 w-full">
    <div className="bg-black opacity-4   flex justify-between text-white pl-[2%] col-span-2 h-auto lg:h-[10vh] p-5  ">
      <div className="flex gap-5 lg:gap-10 justify-center items-start lg:items-center flex-col lg:flex-row">
        <div className="flex gap-3 items-center">
          <span><i className="text-lg fa fa-location" /></span>
          <span className="text-xs flex flex-col items-start font-bold">
            <p className="text-gray-600">Location</p>
            <p>Gisenyi  Rwanda</p>
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <span><i className="text-lg fa fa-mobile" /></span>
          <span className="text-xs flex flex-col items-start font-bold">
            <p className="text-gray-600">Phone</p>
            <p>+250781950819/+250786633041</p>
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <span><i className="text-lg fa fa-envelope" /></span>
          <span className="text-xs flex flex-col items-start font-bold">
            <p className="text-gray-600">E-mail</p>
            <p>kingdomofsalomon2023@gmail.com</p>
          </span>
        </div>
      </div>
      <div className="flex  gap-3 items-start lg:items-center mr-[2%]">
        <span><i className=" text-white   fab fa-youtube" /></span>
        <span><i className="text-white    fa fab fa-instagram" /></span>
        <span><i className="text-white    fab fa-facebook-square" /></span>
        <span><i className="fab fa-linkedin  " /></span>
      </div>
    </div>

    <div className="flex col-span-2 items-center gap-3 lg:gap-40 flex-col lg:flex-row bg-white w-full lg:h-[10vh] h-auto p-[4%]">
      <Link to="/">
        <span>
          <img src={Logo} alt="Logo" />
        </span>
      </Link>

      <ul className="flex gap-10 text-lg font-bold font-serif flex-wrap">
        <li className="list-none transition duration-300 border-b-2 border-transparent hover:border-black">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none transition duration-300 border-b-2 border-transparent hover:border-black">
          <Link to="/about">About</Link>
        </li>
        <li className="list-none transition duration-300 border-b-2 border-transparent hover:border-black">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="list-none transition duration-300 border-b-2 border-transparent hover:border-black">
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
