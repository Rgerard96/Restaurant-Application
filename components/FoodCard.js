import { PlusSmIcon } from '@heroicons/react/outline';
import React from 'react';

export default function FoodCard() {
  return (
    <div className='bg-white p-5 rounded-lg mb-5 relative overflow-hidden flex'>
      <div className='w-3/4'>
        <h3 className='font-bold mb-2'>Margherita pizza</h3>
        <p className='mb-3 text-sm'>Tomatensaus en kaas</p>
        <p className='text-xs italic text-gray-500 mb-3'>
          Keuze uit: Ham (kalkoen), Salami (rund), Kipfilet, Gehakt (rund),
          Shoarma (lams) en meer.
        </p>
        <p className='text-blue-500 font-bold'>€ 7,50</p>
      </div>
      <div className='absolute top-0 right-0 p-2 bg-yellow-500 sm:hover:bg-yellow-600 rounded-bl-lg cursor-pointer'>
          <PlusSmIcon className='text-white w-6'/>
      </div>
    </div>
  );
}
