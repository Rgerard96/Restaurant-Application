import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ShoppingBagIcon,
  XIcon,
  HeartIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';

export default function Menu({ menuOpen, setMenuOpen }) {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setOpen(menuOpen);
  }, [menuOpen]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden'
        onClose={setMenuOpen}
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
          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
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
                      className='hover:text-blue-600 focus:outline-none'
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <span className='sr-only'>Close panel</span>
                      <XIcon className='h-5 w-5' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
                  <div className='mt-6 relative flex flex-col justify-between flex-1 px-5 text-center'>
                    <div className='divide-y'>
                      <div className='p-5 flex items-center cursor-pointer group'>
                        <ShoppingBagIcon className='w-5 text-blue-500 mr-5' />
                        <p className='group-hover:text-blue-500'>
                          Bestellingen
                        </p>
                      </div>
                      <div className='p-5 flex items-center cursor-pointer group'>
                        <HeartIcon className='w-5 text-blue-500 mr-5' />
                        <p className='group-hover:text-blue-500'>Favorieten</p>
                      </div>
                      <div className='p-5 flex items-center cursor-pointer group'>
                        <InformationCircleIcon className='w-5 text-blue-500 mr-5' />
                        <p className='group-hover:text-blue-500'>Hulp nodig?</p>
                      </div>
                    </div>
                    <div>
                      {loggedIn ? (
                        <Link href='/mijn-account'>
                          <a className='block sm:hidden mb-5 p-2 rounded-lg border border-blue-500 text-blue-500'>
                            Mijn Account
                          </a>
                        </Link>
                      ) : (
                        <div className='sm:hidden flex flex-col'>
                          <Link href='/login'>
                            <a className='mb-5 p-2 rounded-lg border border-blue-500 text-blue-500'>
                              Inloggen
                            </a>
                          </Link>
                          <Link href='/register'>
                            <a className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                              Registreren
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
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
