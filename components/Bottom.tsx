import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';



const Bottom = () => {
  return (
    <div className='w-[94%] max-w-[100rem] m-auto pb-8 flex flex-wrap gap-y-6 justify-between'>
      <div> 
        <h3 className='text-sm'>© 2022, <span className='text-[#3BB77E] font-semibold'>Nest</span> - HTML Ecommerce Template</h3>
        <h2 className='text-sm'>All rights reserved</h2>
      </div>
      <div className='flex gap-12 flex-wrap gap-y-3'>
      <div className='flex gap-3 '>
            <FiPhoneCall className='text-4xl opacity-80 mt-3 text-[#3e3b3b] '/>
            <div>
                <h1 className='text-[26px] m-0 font-extrabold text-[#3BB77E]'>1900 - 6666</h1>
                <p className='text-xs -mt-2 tracking-wider'>Working 8:00 - 22:00</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <FiPhoneCall className='text-4xl opacity-80 mt-3 text-[#3e3b3b]'/>
            <div>
                <h1 className='text-[26px] m-0 font-extrabold text-[#3BB77E]'>1900 - 888</h1>
                <p className='text-xs -mt-2 tracking-wider'>24/7 Support center</p>
            </div>
        </div>
      </div>
      <div>
        <div className='flex gap-1'>
            <h1 className='font-bold pt-1 pr-3'>Follow Us</h1>
            <FaFacebookF className='bg-[#3BB77E] w-8 h-8 p-2 rounded-full text-white hover:-translate-y-1 duration-200 cursor-pointer'/>
            <BsTwitter className='bg-[#3BB77E] w-8 h-8 p-2 rounded-full text-white hover:-translate-y-1 duration-200 cursor-pointer'/>
            <BsInstagram className='bg-[#3BB77E] w-8 h-8 p-2 rounded-full text-white hover:-translate-y-1 duration-200 cursor-pointer'/>
            <FaPinterestP className='bg-[#3BB77E] w-8 h-8 p-2 rounded-full text-white hover:-translate-y-1 duration-200 cursor-pointer'/>
            <BsYoutube className='bg-[#3BB77E] w-8 h-8 p-2 rounded-full text-white hover:-translate-y-1 duration-200 cursor-pointer'/>
        </div>
        <h4 className='text-sm'>Up to 15% discount on your first subscribe</h4>
      </div>
    </div>
  )
}

export default Bottom
