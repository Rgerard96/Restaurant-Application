import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import ScrollUpBtn from '../components/ScrollUpBtn';
import '/styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';
import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <div className='font-secundary text-darkGrey relative'>
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
          <ScrollUpBtn />
        </div>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;
