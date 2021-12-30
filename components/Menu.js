import React, { useContext, useEffect, useState } from 'react';
import {
  ShoppingBagIcon,
  HeartIcon,
  InformationCircleIcon,
  LightningBoltIcon,
  TruckIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { AuthContext } from '../context/auth';

export default function Menu() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <div className='-mx-5 border-t p-3'>
        {user && (
          <p className='group-hover:text-blue-500 p-5 border-b text-left capitalize'>{user.name}</p>
        )}
        <div className='p-5 flex border-b items-center cursor-pointer group'>
          <ShoppingBagIcon className='w-6 text-blue-500 mr-5' />
          <p className='group-hover:text-blue-500'>Bestellingen</p>
        </div>
        <div className='p-5 flex border-b items-center cursor-pointer group'>
          <HeartIcon className='w-6 text-blue-500 mr-5' />
          <p className='group-hover:text-blue-500'>Favorieten</p>
        </div>
        <div className='p-5 flex border-b items-center cursor-pointer group'>
          <InformationCircleIcon className='w-6 text-blue-500 mr-5' />
          <p className='group-hover:text-blue-500'>Hulp nodig?</p>
        </div>
        <div className='p-5 flex border-b items-center cursor-pointer group'>
          <TruckIcon className='w-6 text-blue-500 mr-5' />
          <p className='group-hover:text-blue-500'>Mijn bestelling volgen</p>
        </div>
        <div className='p-5 flex border-b items-center cursor-pointer text-red-500'>
          <LightningBoltIcon className='w-6 mr-5' />
          <p>Aanbiedingen</p>
        </div>
      </div>
      <div className='p-3'>
        {user ? (
          <div className='sm:hidden flex flex-col'>
            <a
              className='block sm:hidden mb-5 p-2 rounded-lg border border-blue-500 text-blue-500'
              onClick={() => {
                logout();
              }}
            >
              Uitloggen
            </a>
            <Link href='/mijn-account'>
              <a className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                Mijn Account
              </a>
            </Link>
          </div>
        ) : (
          <div className='sm:hidden flex flex-col'>
            <Link href='/login'>
              <a className='mb-5 p-2 rounded-lg border border-blue-500 text-blue-500'>
                Inloggen
              </a>
            </Link>
            <Link href='/register'>
              <a className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                Registreren
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
