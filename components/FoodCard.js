import { PlusSmIcon } from '@heroicons/react/outline';
import React from 'react';

export default function FoodCard() {
  return (
    <div className='bg-white p-3 rounded-lg mb-5 relative overflow-hidden flex flex-row shadow-md justify-between sm:justify-start'>
      <div
        className='sm:mr-10 -m-5 sm:w-36 sm:min-h-36 2xl:w-48 2xl:min-h-48 bg-cover bg-center bg-no-repeat flex-none order-2 sm:order-none h-20 w-20 rounded-tl-lg self-end'
        style={{ backgroundImage: 'url(' + '/images/img2.jpg' + ')' }}
      ></div>
      <div className='flex flex-col flex-initial w-3/4 sm:w-1/2 md:w-3/5 order-1 sm:order-none'>
        <h3 className='font-bold mb-2 md:text-lg 2xl:text-xl'>Margherita pizza</h3>
        <p className='mb-3 text-sm 2xl:text-base'>Tomatensaus en kaas</p>
        <p className='text-xs 2xl:text-sm italic text-gray-500 mb-3 sm:mb-0'>
          Keuze uit: Ham (kalkoen), Salami (rund), Kipfilet, Gehakt (rund),
          Shoarma (lams) en meer.
        </p>
        <p className='text-blue-500 font-bold sm:text-lg 2xl:text-xl sm:hidden'>€ 7,50</p>
      </div>
      <div className='hidden sm:block absolute top-0 right-0 p-3 '>
        <p className='text-blue-500 font-bold sm:text-lg 2xl:text-xl'>€ 7,50</p>
      </div>
      <div className='absolute top-0 sm:top-auto sm:bottom-0 right-0 p-2 bg-yellow-500 sm:hover:bg-yellow-600 rounded-bl-lg sm:rounded-bl-none sm:rounded-tl-lg cursor-pointer'>
          <PlusSmIcon className='text-white w-6'/>
      </div>
    </div>
  );
}
