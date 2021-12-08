import React, { useState } from 'react';
import Modal from './Modal';

export default function DeliveryOptions() {
  const [deliveryOption, setDeliveryOption] = useState('afhalen');
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const modalHandler = (e) => {
    setModal(!modal);
    setType(e.target.id);
    setDeliveryOption('bezorgen');
  };

  return (
    <div className='sm:hidden flex border-t sticky bottom-0'>
      <Modal modal={modal} setModal={setModal} type={type} />
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
        onClick={modalHandler}
        id='bezorgen'
      >
        Bezorgen
      </div>
    </div>
  );
}

const style = {
  active: 'text-center py-3 flex-1 bg-blue-500 text-white',
  notActve: 'text-center py-3 flex-1 bg-white',
};
