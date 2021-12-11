import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Menu from './Menu';
import Cart from './Cart';

export default function SlideOver({ slideOver, setSlideOver, type }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(slideOver);
  }, [slideOver]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden z-20'
        onClose={setSlideOver}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div
            className={`fixed inset-y-0 right-0 max-w-full flex ${
              type === 'cart' ? 'pt-10' : 'pl-10'
            }`}
          >
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom={
                type === 'cart' ? 'translate-y-full' : 'translate-x-full'
              }
              enterTo={type === 'cart' ? 'translate-y-0' : 'translate-x-0'}
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom={type === 'cart' ? 'translate-y-0' : 'translate-x-0'}
              leaveTo={
                type === 'cart' ? 'translate-y-full' : 'translate-x-full'
              }
            >
              <div className='relative w-screen max-w-md'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 mr-5 pt-4 pr-2 flex sm:pr-4'>
                    <button
                      type='button'
                      className='md:hover:text-blue-600 focus:outline-none'
                      onClick={() => setSlideOver(!slideOver)}
                    >
                      <span className='sr-only'>Close panel</span>
                      <XIcon className='w-6' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
                  <div className='mt-7 relative flex flex-col justify-between flex-1 px-5 text-center'>
                    {type === 'menu' && <Menu />}
                    {type === 'cart' && <Cart />}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
