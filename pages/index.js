import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SlideOver from '../components/SlideOver';
import { LightningBoltIcon } from '@heroicons/react/outline';
import Modal from '../components/Modal';
import CartButton from '../components/CartButton';
import FoodCard from '../components/FoodCard';

export default function Home() {
  const [cart, setCart] = useState(0);
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const [modal, setModal] = useState(false);
  const slideOverHandler = (e) => {
    setSlideOver(!slideOver);
    setType(e.target.id);
  };
  const modalHandler = (e) => {
    setModal(!modal);
    setType(e.target.id);
  };

  const cartHandler = () => {
    setCart(cart + 1);
  };

  return (
    <div className='relative'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlideOver
        slideOver={slideOver}
        setSlideOver={setSlideOver}
        type={type}
      />
      <Modal modal={modal} setModal={setModal} type={type} />
      <Header />
      <div className='grid grid-cols-7 2xl:grid-cols-5 bg-lighterGrey min-h-screen'>
        <div className='col-span-7 xl:col-span-5 2xl:col-span-4 px-5'>
          <div className='mb-5 px-5 py-2 z-10 bg-white -mx-5 sticky top-0 border-b'>
            <NavBar />
          </div>
          <div className='z-0'>
            <div className='mb-3 rounded-lg bg-blue-200 text-blue-500 p-3 font-bold text-sm'>
              Populaire gerechten
            </div>
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <div className='mb-3 rounded-lg bg-blue-200 text-blue-500 p-3 font-bold text-sm'>
              Populaire gerechten
            </div>
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <div className='mb-3 rounded-lg bg-blue-200 text-blue-500 p-3 font-bold text-sm'>
              Populaire gerechten
            </div>
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
            <FoodCard cartHandler={cartHandler} />
          </div>
        </div>
        <div className='bg-white col-span-2 2xl:col-span-1  sticky top-0 hidden xl:block'>
          <Cart />
        </div>
      </div>
      {cart ? <CartButton cart={cart} /> : ''}
    </div>
  );
}
