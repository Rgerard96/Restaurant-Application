import React, { useState } from 'react';

export default function NavBar() {
  const [menuOption, setMenuOption] = useState('Populaire gerechten');

  const menuHandler = (val) => {
    setMenuOption(val);
    let element = document.getElementById(val);
    let topPos = element.getBoundingClientRect().top + window.scrollY - 200;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  };
  return (
    <div className='flex items-center navbarCSS text-sm p-3 pt-3.5'>
      <div
        className={
          menuOption === 'Populaire gerechten' ? style.active : style.notActve
        }
        onClick={() => menuHandler('Populaire gerechten')}
      >
        Populaire gerechten
      </div>
      <div
        className={menuOption === 'Patat' ? style.active : style.notActve}
        onClick={() => menuHandler('Patat')}
      >
        Patat
      </div>
      <div
        className={menuOption === 'Snacks' ? style.active : style.notActve}
        onClick={() => menuHandler('Snacks')}
      >
        Snacks
      </div>
      <div
        className={menuOption === 'Kapsalon' ? style.active : style.notActve}
        onClick={() => menuHandler('Kapsalon')}
      >
        Kapsalon
      </div>
      <div
        className={menuOption === 'Dranken' ? style.active : style.notActve}
        onClick={() => menuHandler('Dranken')}
      >
        Dranken
      </div>
      <div
        className={menuOption === 'Sauzen' ? style.active : style.notActve}
        onClick={() => menuHandler('Sauzen')}
      >
        Sauzen
      </div>
    </div>
  );
}

const style = {
  active:
    'mr-5 sm:mr-8 text-blue-500 border-b-2 border-blue-500 flex-shrink-0 cursor-pointer font-semibold',
  notActve: 'mr-5 sm:mr-8 flex-shrink-0 cursor-pointer sm:hover:text-blue-500',
};
