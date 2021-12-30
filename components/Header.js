import { MenuIcon } from '@heroicons/react/outline';
import SlideOver from './SlideOver';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/auth';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
  };
  return (
    <div>
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      <div className='py-3 px-5 border-b flex justify-between items-center text-sm'>
        <div>
          <h2 className='font-semibold text-blue-500 text-xl'>CultureHypes</h2>
        </div>
        <div className='flex items-center sm:divide-x'>
          {user ? (
            <div className='hidden sm:block'>
              <a
                className='cursor-pointer ml-5 hover:text-blue-600'
                onClick={() => {
                  logout();
                }}
              >
                Uitloggen
              </a>
              <Link href='/mijn-account'>
                <a className='cursor-pointer mx-5 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
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
          <div className='cursor-pointer' onClick={slideOverHandler} id='menu'>
            <MenuIcon className='w-6 ml-5 md:hover:text-blue-600 pointer-events-none' />
          </div>
        </div>
      </div>
    </div>
  );
}
