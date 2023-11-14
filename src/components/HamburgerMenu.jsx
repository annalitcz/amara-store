import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup, faStar } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  return (
    <>
    <div className="relative top-12 flex flex-col justify-center items-center bg-slate-200 text-red-500 h-full w-50 p-4">
      <div className='flex flex-grow justify-between items-center gap-4 pt-2'>
        <Link to={'/'} className='hover:font-semibold'><FontAwesomeIcon icon={faHouse}/>{" "}Home</Link>
        <Link to={'/preview'} className='hover:font-semibold'><FontAwesomeIcon icon={faLayerGroup}/>{" "}Produk</Link>
        <Link to={'/features'} className='hover:font-semibold'><FontAwesomeIcon icon={faStar}/>{" "}Fitur</Link>
        {/* Tambahkan lebih banyak menu jika diperlukan */}
      </div>
    </div>
    </>
  );
};

export default HamburgerMenu;
