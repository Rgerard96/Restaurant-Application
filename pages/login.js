import { LockClosedIcon } from '@heroicons/react/solid';
import { useMutation } from '@apollo/client';
import { useContext, useEffect, useState } from 'react';
import { LOGIN_USER } from '../utils/graphql';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loader from '../components/Loader';

export default function login() {
  const router = useRouter();
  const context = useContext(AuthContext);

  useEffect(() => {
    if (context.user) {
      router.push('/');
    }
  }, []);

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      router.push('/');
      setErrors({});
      setValues({
        email: '',
        password: '',
      });
    },
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  console.log(errors);
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-5 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='font-semibold text-blue-500 text-lg sm:text-2xl text-center'>
            CultureHypes
          </h2>
          <h2 className='mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
            Log in op uw account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Of{' '}
            <Link href='/register'>
              <a
                href='#'
                className='font-medium text-blue-500 hover:text-blue-600'
              >
                maak een account aan
              </a>
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-lg shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                E-mailadres
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className={`${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10`}
                placeholder={`${errors.email ? errors.email : 'E-mailadres'}`}
                onChange={onChange}
                value={values.email}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Wachtwoord
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className={`${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10`}
                placeholder={`${
                  errors.password ? errors.password : 'Wachtwoord'
                }`}
                onChange={onChange}
                value={values.password}
              />
            </div>
          </div>

          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded-lg'
            />
            <label
              htmlFor='remember-me'
              className='ml-2 block text-sm text-gray-900'
            >
              Ik wil 30 dagen ingelogd blij
            </label>
          </div>

          <div>
            {loading ? (
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent  font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none mb-3'
              >
                <Loader />
              </button>
            ) : (
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent  font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-3'
                onClick={onSubmit}
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='w-6 text-blue-400 group-hover:text-blue-300'
                    aria-hidden='true'
                  />
                </span>
                Inloggen
              </button>
            )}
            <div className='text-center'>
              <Link href='/forgot-password'>
                <a
                  href='#'
                  className='font-medium text-sm text-blue-500 hover:text-blue-600'
                >
                  Wachtwoord vergeten?
                </a>
              </Link>
            </div>
          </div>
        </form>
        <div className=' text-center'>
          <Link href='/'>
            <a href='#' className='font-medium hover:text-blue-600'>
              Terug naar homepagina
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
