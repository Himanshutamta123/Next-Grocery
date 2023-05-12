import React from 'react'
import banner1 from '../images/banner-1.png'
import banner2 from '../images/banner-2.png'
import banner3 from '../images/banner-3.png'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi';

const bannerData = [
    {
        title:"Everyday Fresh & Clean with Our Products",
        img: banner1
    },
    {
        title:"Make your Breakfast Healthy and Easy",
       img:banner2
    },
    {
        title:"The best Organic Products Online",
       img: banner3
    }
]

const Banner = () => {
  return (
    <div className='w-[96%] m-auto max-w-[100rem] my-9 grid grid-cols-3 gap-7'>
      {bannerData.map((items) : any => {
        return(
            <div className='relative ' >
                <Image src={items.img} alt="fshdjf" className='rounded-xl'/>
                <div className='absolute top-[25%] left-[10%] leading-8 w-[50%] space-y-6'>
                <h1 className='text-[27px] font-bold opacity-80 cursor-pointer hover:-translate-y-2 duration-150'>{items.title}</h1>
                <button className='flex bg-[#3BB77E] rounded-md text-sm py-1 px-2 text-white font-semibold hover:bg-[#ffc107]'>Shop Now<BiRightArrowAlt className='m-1'/></button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Banner
