import Head from 'next/head';
import Cart from '../components/Cart';
import DeliveryOptions from '../components/DeliveryOptions';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='flex bg-lighterGrey min-h-screen'>
        <div className='flex-1 p-5'>
          <div></div>
          <div>
            <div className='bg-white rounded-lg w-full h-40 mb-5'></div>
          </div>
        </div>
        <div className='bg-white w-96 sticky top-0 hidden sm:block'>
          <Cart />
        </div>
      </div>
      <DeliveryOptions />
    </div>
  );
}
