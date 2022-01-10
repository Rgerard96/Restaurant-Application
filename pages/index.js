import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SlideOver from '../components/SlideOver';
import Modal from '../components/Modal';
import CartButton from '../components/CartButton';
import FoodCard from '../components/FoodCard';
import { GET_PRODUCTS } from '../utils/graphql';
import products from '../data/products copy';

export default function Home() {
  const [cart, setCart] = useState(0);
  const [slideOver, setSlideOver] = useState(false);
  const [type, setType] = useState();
  const [modal, setModal] = useState(false);
  // const { loading, error, data } = useQuery(GET_PRODUCTS);

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
          <div className=' my-3'>
            <div className='bg-white border-2 border-blue-500 rounded-lg h-32'></div>
          </div>
          <div className='mb-3 px-5 py-1.5 z-10 bg-white -mx-5 sticky top-0 border-b'>
            <NavBar />
          </div>
          {products.map((product, index) => (
            <div key={index}>
              <div className='mb-3 rounded-lg bg-blue-200 text-blue-500 p-3 font-semibold text-sm'>
                {product.category}
              </div>
              <FoodCard foods={product.foods} cartHandler={cartHandler} />
            </div>
          ))}
        </div>
        <div className='bg-white col-span-2 2xl:col-span-1  sticky top-0 hidden xl:block'>
          <Cart />
        </div>
      </div>
      {cart ? <CartButton cart={cart} /> : ''}
    </div>
  );
}
