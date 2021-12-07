import React, { useState } from 'react';

export default function DeliveryOptions() {
  const [deliveryOption, setDeliveryOption] = useState('afhalen');
  return (
    <div className='sm:hidden flex border-t sticky bottom-0'>
      <div
        className={deliveryOption === 'afhalen' ? style.active : style.notActve}
        onClick={() => setDeliveryOption('afhalen')}
      >
        Afhalen
      </div>
      <div
        className={
          deliveryOption === 'bezorgen' ? style.active : style.notActve
        }
        onClick={() => setDeliveryOption('bezorgen')}
      >
        Bezorgen
      </div>
    </div>
  );
}

const style = {
  active: 'text-center py-3 flex-1 bg-blue-500 text-white underline',
  notActve: 'text-center py-3 flex-1 bg-white',
};
