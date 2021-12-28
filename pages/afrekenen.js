import Head from 'next/head';
import React, { useState } from 'react';
import Cart from '../components/Cart';
import SlideOver from '../components/SlideOver';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function afrekenen() {
  const router = useRouter();
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();

  const goBackHandler = () => {
    setSlideOver(true);
    setType('cart');
    router.back();
  };

  return (
    <div className='relative'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      <div className='grid grid-cols-7 2xl:grid-cols-5 min-h-screen'>
        <div className='col-span-7 xl:col-span-5 2xl:col-span-4 px-3 sm:px-5'>
          <div className='mb-5 p-3 z-10  bg-blue-500 sm:bg-white text-white sm:text-black -mx-5 sticky top-0 border-b text-center text-xl sm:font-semibold'>
            <ChevronLeftIcon
              className='w-5 absolute left-6 top-4 cursor-pointer'
              onClick={goBackHandler}
            />
            Afrekenen
          </div>
          <div className='max-w-3xl mx-auto rounded-lg p-3 sm:p-5 mb-5'>
            <div className='mb-10'>
              <h3 className='mb-5 font-semibold text-lg'>
                Persoonlijke gegevens
              </h3>
              <div className='grid md:grid-cols-2 gap-5'>
                <div>
                  <label className='block mb-2'>Voor- en achternaam</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Voor- en achternaam'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
                <div>
                  <label className='block mb-2'>E-mailadres</label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='E-mailadres'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
                <div>
                  <label className='block mb-2'>Telefoon</label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='Telefoonnummer'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className='mb-5 font-semibold text-lg'>Bezorgadres</h3>
              <div className='grid md:grid-cols-2 gap-5'>
                <div>
                  <label className='block mb-2'>Postcode</label>
                  <input
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    placeholder='Postcode bijv. 3073GS'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
                <div>
                  <label className='block mb-2'>Huisnummer</label>
                  <input
                    id='huisnummer'
                    name='huisnummer'
                    type='huisnummer'
                    autoComplete='huisnummer'
                    placeholder='Huisnummer'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
                <div>
                  <label className='block mb-2'>
                    Huisnummer toevoeging (optioneel)
                  </label>
                  <input
                    type='text'
                    name='huisnummerToe'
                    id='huisnummerToe'
                    placeholder='Huisnummer toevoeging'
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white col-span-2 2xl:col-span-1  hidden xl:block'>
          <Cart />
        </div>
      </div>
    </div>
  );
}
