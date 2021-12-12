import { ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState(1);
  return (
    <div className='xl:border-l'>
      <div className='-mx-5 xl:mx-0 text-center p-3 mb-4 text-xl font-bold border-b border-t sm:border-t-0'>
        Winkelmandje
      </div>
      {cart ? (
        <div className='p-3 w-full'>
          <Link href='/afrekenen'>
            <a className='cursor-pointer p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
              Registreren
            </a>
          </Link>
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
