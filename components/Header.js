import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import Menu from './Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='py-3 px-5 border-b flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-blue-500 text-lg sm:text-2xl'>
            CultureHypes
          </h2>
        </div>
        <div className='flex items-center sm:divide-x'>
          {loggedIn ? (
            <div className='hidden sm:block'>
              <Link href='/mijn-account'>
                <a className='cursor-pointer mx-5 hover:text-blue-600'>
                  Mijn Account
                </a>
              </Link>
            </div>
          ) : (
            <div className='hidden sm:block'>
              <Link href='/login'>
                <a className='cursor-pointer ml-5 hover:text-blue-600'>
                  Inloggen
                </a>
              </Link>
              <Link href='/register'>
                <a className='cursor-pointer mx-5 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                  Registreren
                </a>
              </Link>
            </div>
          )}
          <div className='cursor-pointer' onClick={menuHandler}>
            <MenuIcon className='w-5 ml-5 hover:text-blue-600' />
          </div>
        </div>
      </div>
    </div>
  );
}
