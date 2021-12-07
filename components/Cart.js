import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState(0);
  return (
    <div>
      <div className='text-center p-3 mb-4 text-xl font-bold border-b border-t sm:border-t-0'>
        Winkelmandje
      </div>
      {cart ? (
        <div className=''></div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-32 p-4 text-center'>
          <ShoppingCartIcon className='w-8 mb-2' />
          <h3 className='mb-2 text-lg font-bold'>Vul uw mandje</h3>
          <p className='mb-2 text-gray-400'>
            Voeg wat lekker eten toe van het menu en bestel je eten.
          </p>
        </div>
      )}
    </div>
  );
}
