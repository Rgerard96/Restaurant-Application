import React from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';

export default function forgotPassword() {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-5 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='font-bold text-blue-500 text-lg sm:text-2xl'>
            CultureHypes
          </h2>
          <h2 className='mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900'>
            Wachtwoord vergeten
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Of{' '}
            <Link href='/login'>
              <a
                href='#'
                className='font-medium text-blue-500 hover:text-blue-600'
              >
                log in op uw account
              </a>
            </Link>
          </p>
          <p className='mt-6'>
            Voer het e-mailadres in dat bij uw account hoort en wij sturen u een
            e-mail met instructies om uw wachtwoord opnieuw in te stellen.
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-lg shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                E-mailadres
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:'
                placeholder='E-mailadres'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent  font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-3'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='w-6 text-blue-400 group-hover:text-blue-300'
                  aria-hidden='true'
                />
              </span>
              Versturen
            </button>
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
