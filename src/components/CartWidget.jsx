import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

export const CartWidget = () => {
  return (
    <div className='relative'>
        <span className='w-4 h-4 rounded-full text-xs bg-red-600 text-white absolute -top-1 -right-2 grid place-items-center'>4</span>
        <CiShoppingCart className='text-3xl'/></div>
  )
}
