import React, { useState } from 'react';
import SlideOver from './SlideOver';

export default function CartButton({ cart }) {
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
  };

  return (
    <div
      className='sm:hidden sticky bottom-0 text-center py-3 flex-1 bg-blue-500 text-white'
      onClick={slideOverHandler}
      id='cart'
    >
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      Winkelmandje <span className='pointer-events-none'>({cart})</span>
    </div>
  );
}
