import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React from 'react';

export default function CartItem() {
  return (
    <div className='flex py-5 border-b text-sm justify-between'>
      <div className='flex'>
        <div className='mr-5 flex-none'>
          <p>1x</p>
        </div>
        <div className='flex flex-col justify-between items-start text-left mr-5'>
          <div>
            <h3 className='font-semibold'>Margherita pizza</h3>
            <p className='mb-3'>Tomatensaus en kaas</p>
          </div>
          <div>
            <p className='underline text-blue-500 text-xs'>
              Opmerking toevoegen
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between flex-none'>
        <div>
          <p>&euro; 15,00</p>
        </div>
        <div className='flex text-blue-700'>
          <div className='cursor-pointer border p-1 mr-2'>
            <MinusIcon className='w-3' />
          </div>
          <div className='cursor-pointer border p-1'>
            <PlusIcon className='w-3' />
          </div>
        </div>
      </div>
    </div>
  );
}
