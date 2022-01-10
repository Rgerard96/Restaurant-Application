import { PlusSmIcon } from '@heroicons/react/outline';

export default function FoodCard({ foods, cartHandler }) {

  return (
    <div>
      {foods.map((food, index) => (
        <div key={index} className='bg-white p-3 rounded-lg mb-5 relative overflow-hidden flex flex-row shadow-md justify-between sm:justify-start min-h-36'>
          <div
            className='sm:mr-8 -m-3 sm:w-36 sm:min-h-36 2xl:w-48 2xl:min-h-48 bg-cover bg-center bg-no-repeat flex-none order-2 sm:order-none h-20 w-20 rounded-bl-lg'
            style={{ backgroundImage: 'url(' + food.image + ')' }}
          ></div>
          <div className='flex flex-col flex-initial w-3/5 sm:w-1/2 md:w-3/5 order-1 sm:order-none'>
            <h3 className='font-semibold md:text-lg 2xl:text-xl'>
              {food.name}
            </h3>
            <p className='mb-3 text-sm 2xl:text-base'>{food.description}</p>
            <p className='text-xs 2xl:text-sm italic text-gray-500 mb-10 sm:mb-0'>
              Keuze uit: {food.choice}
            </p>
          </div>
          <div className='absolute left-0 bottom-0 sm:left-auto sm:bottom-auto sm:top-0 sm:right-0 p-3 '>
            <p className='text-blue-500 font-semibold 2xl:text-lg'>
              € {food.price.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div
            className='absolute bottom-0 right-0 w-20 flex items-center justify-center py-2 bg-yellow-500 sm:hover:bg-yellow-600 rounded-tl-lg cursor-pointer'
            onClick={cartHandler}
          >
            <PlusSmIcon className='text-white w-6' />
          </div>
        </div>
      ))}
    </div>
  );
}
