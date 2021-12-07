import React from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';

export default function login() {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-5 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='font-bold text-blue-500 text-lg sm:text-2xl text-center'>
            CultureHypes
          </h2>
          <h2 className='mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
            Log in op uw account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Of{' '}
            <Link href='/register'>
              <a
                href='#'
                className='font-medium text-blue-500 hover:text-blue-600'
              >
                maak een account aan
              </a>
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                E-mailadres
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:'
                placeholder='E-mailadres'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Wachtwoord
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:'
                placeholder='Wachtwoord'
              />
            </div>
          </div>

          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded'
            />
            <label
              htmlFor='remember-me'
              className='ml-2 block text-sm text-gray-900'
            >
              Ik wil 30 dagen ingelogd blijven
            </label>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent  font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-3'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='w-6 text-blue-400 group-hover:text-blue-300'
                  aria-hidden='true'
                />
              </span>
              Inloggen
            </button>
            <div className='text-center'>
              <Link href='/forgot-password'>
                <a
                  href='#'
                  className='font-medium text-sm text-blue-500 hover:text-blue-600'
                >
                  Wachtwoord vergeten?
                </a>
              </Link>
            </div>
          </div>
        </form>
        <div className=' text-center'>
          <Link href='/'>
            <a href='#' className='font-medium hover:text-blue-600'>
              Terug naar homepagina
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
