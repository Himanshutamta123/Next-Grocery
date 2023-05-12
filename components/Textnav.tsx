import React from 'react'
import Image from 'next/image'
import logo from '../images/nestlogo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsHeart } from 'react-icons/bs';
import { GiRecycle } from 'react-icons/gi';
import { HiOutlineSearch } from 'react-icons/hi';

const Textnav = () => {
  return (
    <div className='m-auto w-[94%] max-w-[100rem] py-8 text-sm flex gap-6'>
      <Image src={logo} width={190} alt='logo' className='mr-10'/>
      <div className='w-[44%] flex bg-white p-3 h-12 border-2 border-[#3BB77E] gap-2 rounded-md mt-1'>
        <div className='flex border-r border-[#ececec] pr-2 font-bold w-[19%]'>All Categories <IoIosArrowDown className='ml-2 m-1'/></div>
        <input className='w-[76%] focus:outline-none'placeholder='Search for items...'/><HiOutlineSearch className=' text-lg'/>
      </div>
      <div className='flex bg-white border-1 boder-[#ececec] py-2 h-9 px-4 rounded-md mt-2 ml-4 drop-shadow-lg opacity-70'><CiLocationOn className='text-base mr-2'/>Your Loction<IoIosArrowDown className='m-1 ml-2 '/>
      </div>
      <div className='flex py-3 text-base mt-1'><GiRecycle className='text-2xl mr-1 -mt-1 ml-2'/>Compare</div>
      <div className='flex py-3 text-base mt-1'><BsHeart className='text-2xl mr-1 -mt-1'/>Wishlist</div>
      <div className='flex py-3 text-base mt-1'><RiShoppingCart2Line className='text-2xl mr-1 -mt-1'/>Cart</div>
      <div className='flex py-3 text-base mt-1'><MdOutlinePersonOutline className='text-3xl mr-1 -mt-2'/>Account</div>
    </div>
  )
}

export default Textnav
