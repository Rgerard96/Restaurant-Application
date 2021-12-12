import { ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';
import CartItem from './CartItem';

export default function Cart() {
  const [cart, setCart] = useState(1);
  return (
    <div className='xl:border-l flex flex-col h-full'>
      <div className='-mx-5 xl:mx-0 text-center p-3 text-xl font-bold border-b border-t sm:border-t-0 flex-none sticky top-0 bg-white'>
        Winkelmandje
      </div>
      {cart ? (
        <div className='p-3 flex-1 flex flex-col justify-between sm:px-5'>
          <div className='flex-1 flex flex-col justify-between'>
            <div className='flex-1 overflow-scroll'>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className='mb-3'>
              <div className='flex justify-between mb-1 items-center'>
                <p>Subtotaal</p>
                <p>&euro; 15,00</p>
              </div>
              <div className='flex justify-between mb-1 items-center'>
                <p>Bezorgkosten</p>
                <p>Gratis</p>
              </div>
              <div className='flex justify-between mb-1 items-center font-bold'>
                <p>Totaal</p>
                <p>&euro; 15,00</p>
              </div>
            </div>
          </div>
          <div className='pt-3 border-t'>
            <Link href='/afrekenen'>
              <div
                className=' text-center py-3 bg-blue-500 text-white'
                onClick={() => {
                  console.log('afrekenen');
                }}
              >
                Afrekenen{' '}
                <span className='pointer-events-none'>(&euro; 15,00)</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-32 p-4 text-center'>
          <ShoppingCartIcon className='w-8 mb-2' />
          <h3 className='mb-2 text-lg font-bold'>Uw mandje is leeg</h3>
          <p className='mb-2 text-gray-400 text-sm'>
            Voeg wat lekker eten toe van het menu en bestel je eten.
          </p>
        </div>
      )}
    </div>
  );
}
