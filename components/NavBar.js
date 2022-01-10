import React, { useState } from 'react';
import products from '../data/products copy';

export default function NavBar() {
  const [menuOption, setMenuOption] = useState('Populaire gerechten');

  const menuHandler = (val) => {
    setMenuOption(val);
    let elmnt = document.getElementById(val);
    elmnt.scrollIntoView();
  };

  return (
    <div className='flex items-center navbarCSS text-sm p-3 pt-3.5'>
      {products.map((product, index) => (
        <div
          className={
            menuOption === product.category ? style.active : style.notActve
          }
          key={index}
          id={product.category}
          onClick={() => menuHandler(product.category)}
        >
          {product.category}
        </div>
      ))}
    </div>
  );
}

const style = {
  active:
    'mr-5 sm:mr-8 text-blue-500 border-b-2 border-blue-500 flex-shrink-0 cursor-pointer font-semibold',
  notActve: 'mr-5 sm:mr-8 flex-shrink-0 cursor-pointer sm:hover:text-blue-500',
};
