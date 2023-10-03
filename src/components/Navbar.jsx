import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <div className='text-black w-full shadow-md'>
        <nav className='max-w-7xl w-full flex flex-row justify-between items-center p-4 mx-auto'>
            <h2 className='text-amber-800 text-3xl font-semibold'>CoffeBeans</h2>
            <CartWidget/>
        </nav>

    </div>
  )
}