import { ChevronUpIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';

export default function ScrollUpBtn() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPosition);
  return (
    <div
      className={`z-10 right-2 bottom-20 rounded-full transition-all bg-white drop-shadow p-1 scrollSmooth ${
        scrollPosition >= 750 ? 'fixed' : 'hidden'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUpIcon className='w-7 h-7' />
    </div>
  );
}
