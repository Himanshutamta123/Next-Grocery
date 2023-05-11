import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';


const Header = () => {
  return (
    <div className='m-auto w-[94%] max-w-[100rem]  grid grid-cols-3 p-2 text-sm'>
      <div className=''>
        <ul className='flex gap-2'>
            <li className='border-r border-[#ececec] pr-2'>
                About Us
            </li>
            <li className='border-r border-[#ececec] pr-2'>
                My Account
            </li>
            <li className='border-r border-[#ececec] pr-2'>
                Wishlist
            </li>
            <li>
                Order Tracking
            </li>
        </ul>
      </div>
      <div className='justify-self-center font-black text-sm opacity-70'>
      <h3>Supper Value Deals - Save more with coupons</h3>
      </div>
      <div className='justify-self-end'>
        <ul className='flex gap-2'>
            <li className='border-r border-[#ececec] pr-2'>
                Need help?Call Us:<span className='text-[#3BB77E] font-semibold'>+ 1800 900</span>
            </li>
            <li className='flex border-r border-[#ececec] pr-2'>English <IoIosArrowDown className='m-1'/></li>
            <li className='flex '>USD <IoIosArrowDown className='m-1'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
