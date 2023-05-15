import Image from 'next/image'
import React from 'react'
import banner4 from '../images/banner-4.png'
import { BiRightArrowAlt } from 'react-icons/bi';
import product1 from ".././images/product-1-1.jpg";
import product11 from ".././images/product-1-2.jpg";
import product21 from ".././images/product-2-1.jpg";
import product22 from ".././images/product-2-2.jpg";
import product31 from ".././images/product-3-1.jpg";
import product32 from ".././images/product-3-2.jpg";
import product41 from ".././images/product-4-1.jpg";
import product42 from ".././images/product-4-2.jpg";
import {useState} from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import ratingstar from '../images/stars.webp'
import styled from 'styled-components';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";


const bestproduct = [
    {
        lf: "Svae 15%",
        product1: product1,
        product11: product11,
        name: "snack",
        about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        discount: "$238.35",
        mrp: "$245.8",
        color: "#f74b81",
      },
      {
        lf: "Sale",
        product1: product21,
        product11: product22,
        name: "Hodo Foods",
        about: "All Natural Italian-Style Chicken Meatballs",
        discount: "$238.35 ",
        mrp: "$245.8",
        color: "#67bcee",
      },
      {
        lf: "New",
        product1: product31,
        product11: product32,
        name: "snack",
        about: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        discount: "$238.35 ",
        mrp: "$245.8",
        color: "#3BB77E",
      },
      {
        lf: "Save 15%",
        product1: product41,
        product11: product42,
        name: "Vegetables",
        about: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        discount: "$238.35",
        mrp: "$245.8",
        color: "#ffc107"
      }
]

const Bestseller = () => {
    const [hovered, setHovered] = useState(false);

    const HoverDiv = styled.div`
    ul {
      display: none;
    }

    &:hover ul {
      display: flex;
    }
  `;

  return (
    <div className='w-[96%] max-w-[100rem] m-auto my-6'>
      <div className='flex justify-between py-7'>
        <h1 className='text-3xl font-semibold opacity-80'>Daily Best Sells</h1>
        <ul className='flex gap-6 font-bold'>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-150'>Featured</li>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-150'>Popular</li>
            <li className='hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-150'>New added</li>
        </ul>
      </div>
      <div className='flex py-4 gap-6' >
        <div className='relative w-[32%]'>
        <Image src={banner4} alt='banner4' width={390} className='rounded-2xl'/>
        <div className='absolute top-[10%] w-[80%] left-[15%] space-y-24'>
        <h1 className='text-[43px] font-extrabold tracking-wide opacity-90 leading-[50px] '>Bring nature into your home</h1>
        <button className='flex bg-[#3BB77E] text-white font-semibold text-sm px-3 py-1.5 rounded-lg hover:bg-[#ffc107]'>Shop now<BiRightArrowAlt className='m-1'/></button>
        </div>
        </div>
        <div className='grid grid-cols-4 gap-6 w-[100%]' onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}> 
            {bestproduct.map((items) => {
                return(
                    <HoverDiv className='border-[1px] rounded-2xl relative p-5 cursor-pointer hover:shadow-lg'>
                        <ul className="absolute border-[1px] border-[#3BB77E] top-[25%] bg-white rounded-lg left-[26%]">
                <li className=" px-3 py-2.5 text-lg text-[#3BB77E] cursor-pointer hover:text-[#ffc107] font-semibold border-r-[1px] border-[#3BB77E]">
                  <AiOutlineHeart />
                </li>
                <li className=" px-3 py-2.5 text-lg text-[#3BB77E] cursor-pointer hover:text-[#ffc107] font-semibold border-r-[1px] border-[#3BB77E]">
                  <BsShuffle />
                </li>
                <li className=" px-3 py-2.5 text-lg text-[#3BB77E] cursor-pointer hover:text-[#ffc107] font-semibold">
                  <AiOutlineEye />
                </li>
              </ul>
                    <p
                className="py-1 rounded-tl-xl  rounded-br-2xl text-sm text-white px-4 absolute top-0 left-0"
                style={{ background: items.color }}
              >
                {items.lf}
              </p>
              <Image
                src={hovered ? items.product11 : items.product1}
                width={270}
                alt="product1"
                className=""
              />
              <p className="text-sm font-bold text-[#adadad] py-2 hover:text-[#3BB77E] cursor-pointer">
                {items.name}
              </p>
              <h2 className="text-base font-semibold hover:text-[#3BB77E] cursor-pointer leading-6 ">
                {items.about}
                <Image src={ratingstar} alt='star' width={70}  className=' pt-2'/>
              </h2>
                <h3 className="font-bold text-lg text-[#3BB77E] py-3">
                  {items.discount}
                  <span className="pl-4 text-base text-[#adadad] line-through">
                    {items.mrp}
                  </span>
                </h3>
                <div className='w-[100%] h-[5px] bg-[#adadad] rounded-full relative'>
                    <div className='absolute top-0 w-[50%] bg-[#3BB77E] h-[5px] rounded-full'>
                    </div>
                </div>
                <p className='pb-4 text-sm pt-2'>Sold: 90/120</p>
                <button className="flex text-white font-bold bg-[#3BB77E] rounded-md py-3 hover:bg-[#ffc107] hover:text-white hover:-translate-y-1 duration-75 w-[100%] justify-center">
                  <RiShoppingCart2Line className="m-1"/>
                  Add to card
                </button>
              </HoverDiv>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Bestseller
