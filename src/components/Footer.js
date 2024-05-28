import React from 'react';
import { Link } from 'react-router-dom';
import { MdMarkEmailRead, MdLocationPin } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => (
  <>
    <div className="bg-[#007300] text-white px-3 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <div className="text-sm">
          <p className="flex items-center mb-2">
            <FaPhone className="h-5 w-5 mr-2" />
            <span className='text-xs sm:text-sm'>+234 902 409 2654, +234 805 095 9967, +234 706 556 5254</span>
          </p>
          <p className="flex items-center mb-2">
            <MdMarkEmailRead className="h-5 w-5 mr-2" />
            <span>
              <Link
                className="text-white underline"
                to="mailto:mssnakinyele.ac@gmail.com"
              >
                dhcdaarulhadeeth@gmail.com
              </Link>
            </span>
          </p>
          <p className="flex items-center mb-2">
            <MdLocationPin className="h-5 w-5 mr-2" />
            <span>Luth Estate Tigbo Ilu Area, Iyana Ilogbo, Ogun State, Nigeria</span>
          </p>
          <p className="flex items-center">
            <FaFacebookF className="h-5 w-5 mr-2" />
            <Link to="https://www.facebook.com/profile.php?id=100086708090259" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
              Daarul Hadeeth
            </Link>
          </p>
        </div>
      </div>
    </div>
    <hr className=" border-t-2 max-w-350 mt-4" />
  </>
);

export default Footer;
