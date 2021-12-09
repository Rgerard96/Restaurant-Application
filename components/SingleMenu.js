import React from 'react'
import FoodCard from './FoodCard'

export default function SingleMenu() {
    return (
        <div>
            <div className='mb-5 rounded-lg bg-blue-200 text-blue-500 p-5 font-bold'>
                Populaire gerechten
            </div>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
        </div>
    )
}
