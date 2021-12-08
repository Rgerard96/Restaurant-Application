import Head from 'next/head';
import React, { useState } from 'react';
import Cart from '../components/Cart';
import DeliveryOptions from '../components/DeliveryOptions';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SlideOver from '../components/SlideOver';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function Home() {
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
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
      <Header />
      <div className='grid grid-cols-7 2xl:grid-cols-5 bg-lighterGrey min-h-screen'>
        <div className='col-span-7 sm:col-span-5 2xl:col-span-4 px-5'>
          <div className='mb-3 px-5 py-3 bg-white -mx-5'>
            <div className='mb-3 border-b -mx-5 px-5 sm:pl-5 pb-3 flex items-center justify-between'>
              <div className='font-bold text-lg sm:text-xl'>Menu</div>
              <div className='sm:hidden' onClick={slideOverHandler} id='cart'>
                <ShoppingCartIcon className='w-6 pointer-events-none' />
              </div>
            </div>
            <NavBar />
          </div>
          <div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
          </div>
        </div>
        <div className='bg-white col-span-2 2xl:col-span-1  sticky top-0 hidden sm:block'>
          <Cart />
        </div>
      </div>
      <DeliveryOptions />
    </div>
  );
}
