import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-secundary text-darkGrey'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Quicksand:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
