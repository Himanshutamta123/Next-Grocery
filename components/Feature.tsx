import React from 'react'
import cat1 from '../images/cat-1.png'
import cat2 from '../images/cat-2.png'
import cat3 from '../images/cat-3.png'
import cat4 from '../images/cat-4.png'
import cat5 from '../images/cat-5.png'
import cat9 from '../images/cat-9.png'
import cat11 from '../images/cat-11.png'
import cat12 from '../images/cat-12.png'
import cat13 from '../images/cat-13.png'
import cat14 from '../images/cat-14.png'
import Image from 'next/image'

const categoryData = [
  {
    img: cat13,
    heading:"Cake & milk",
    item: "26 items",
    color: "#20c99643"
  },
  {
    img: cat12,
    heading:"Organic Kiwi",
    item: "28 items",
    color:"#ffc1075b"
  },{
    img: cat11,
    heading:"Peach",
    item: "14 items",
    color: "#1987543e"
  },
  {
    img: cat9,
    heading:"Red Apple",
    item: "54 items",
    color: "#dc35465c"
  },
  {
    img: cat3,
    heading:"Snack",
    item: "56 items",
    color: "#ffc1075c"
  },
  {
    img: cat1,
    heading:"Vegetables",
    item: "72 items",
    color: "#6e42c151"
  },
  {
    img: cat2,
    heading:"Strawberry",
    item: "36 items",
    color: "#1987544a"
  },{
    img: cat4,
    heading:"Black plum",
    item: "123 items",
    color:"#fd7d1443"
  },
  {
    img: cat5,
    heading:"Castard",
    item: "34 items",
    color:"#ffc1075b"
  },
  {
    img: cat14,
    heading:"Coffee & Tea",
    item: "89 items",
    color: "#fd7d142f"
  }
]

const Feature = () => {
  return (
    <div className='m-auto w-[94%] max-w-[100rem] mt-12'>
      <div className='flex gap-9 mb-10 flex-wrap max-sm:gap-4'>
        <h1 className='text-3xl font-bold opacity-80'>
            Featured Categories
        </h1>
        <ul className='flex font-semibold gap-7 items-end flex-wrap max-sm:gap-4'>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-75'>Cake & Milk</li>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-75'>Coffes & Teas</li>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-75'>Pet Foods</li>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-75'>Vegetables</li>
        </ul>
      </div>
      <div className='flex flex-wrap gap-6 text-center justify-center '>
        {categoryData.map((items) : any => {
          return(
            <div className='rounded-xl items-center place-self-center p-5 border-[1px] hover:border-[#3BB77E] hover:shadow-lg ' style={{background: items.color}}>
              <Image src={items.img} alt="pic" className='w-20 mx-2 my-3 opacity-100 transition ease-in-out hover:scale-125 duration-300 cursor-pointer'/>
              <h3 className='font-bold opacity-80 hover:text-[#3BB77E] cursor-pointer'>{items.heading}</h3>
              <p className='text-sm'>{items.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feature
