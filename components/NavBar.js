import React, { useState } from 'react';

export default function NavBar() {
  const [deliveryOption, setDeliveryOption] = useState('afhalen');
  return (
    <div className='flex items-center navbarCSS text-xs sm:text-sm pb-1'>
      <div
        className={deliveryOption === 'afhalen' ? style.active : style.notActve}
      >
        Populaire gerechten
      </div>
      <div className={deliveryOption === 'b' ? style.active : style.notActve}>
        Patat
      </div>
      <div className={deliveryOption === 'b' ? style.active : style.notActve}>
        Snacks
      </div>
      <div className={deliveryOption === 'b' ? style.active : style.notActve}>
        Kapsalon
      </div>
      <div className={deliveryOption === 'b' ? style.active : style.notActve}>
        Dranken
      </div>
      <div className={deliveryOption === 'b' ? style.active : style.notActve}>
        Sauzen
      </div>
    </div>
  );
}

const style = {
  active:
    'mr-5 sm:mr-8 bg-blue-500 text-white rounded-lg p-2 flex-shrink-0 cursor-pointer',
  notActve: 'mr-5 sm:mr-8 flex-shrink-0 cursor-pointer sm:hover:text-blue-500',
};
