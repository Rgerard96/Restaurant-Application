import React, { useState } from 'react';

export default function NavBar() {
  const [menuOption, setMenuOption] = useState('Populaire gerechten');
  return (
    <div className='flex items-center navbarCSS text-sm sm:text-base pb-1'>
      <div
        className={
          menuOption === 'Populaire gerechten' ? style.active : style.notActve
        }
        onClick={() => setMenuOption('Populaire gerechten')}
      >
        Populaire gerechten
      </div>
      <div
        className={menuOption === 'Patat' ? style.active : style.notActve}
        onClick={() => setMenuOption('Patat')}
      >
        Patat
      </div>
      <div
        className={menuOption === 'Snacks' ? style.active : style.notActve}
        onClick={() => setMenuOption('Snacks')}
      >
        Snacks
      </div>
      <div
        className={menuOption === 'Kapsalon' ? style.active : style.notActve}
        onClick={() => setMenuOption('Kapsalon')}
      >
        Kapsalon
      </div>
      <div
        className={menuOption === 'Dranken' ? style.active : style.notActve}
        onClick={() => setMenuOption('Dranken')}
      >
        Dranken
      </div>
      <div
        className={menuOption === 'Sauzen' ? style.active : style.notActve}
        onClick={() => setMenuOption('Sauzen')}
      >
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
