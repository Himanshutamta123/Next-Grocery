import React from 'react'
import Image from 'next/image'
import logo from '../images/nestlogo.png'
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BsHeadset } from 'react-icons/bs';
import { BsFire } from 'react-icons/bs';
import styled from 'styled-components';


const HoverDiv = styled.div`
  ul {
    display: none;
  }

  &:hover ul{
    display: block;
  }
`;



const Navbar = () => {
  return (
    <div className='m-auto w-[94%] max-w-[100rem] py-3 flex justify-between align-middle'>
        <div className='flex bg-[#3BB77E] py-3 px-3 gap-2 text-white rounded-lg cursor-pointer'>
            <AiOutlineAppstore className='text-2xl'/>
            <p className='font-bold'>Browse All Categories</p>
            <IoIosArrowDown className='mt-1'/>
        </div>
        <div className='flex gap-9 justify-startw-[60%] -ml-[10%] pt-3 font-bold'>
            <h2 className='flex gap-2 hover:text-[#3BB77E] cursor-pointer'><BsFire className='text-xl text-[#3BB77E]'/>Deals</h2>
            <HoverDiv className='flex gap-2 cursor-pointer'><h4 className='hover:text-[#3BB77E]'>Home</h4><IoIosArrowDown className='mt-1.5 p-0.5'/>
            <ul className='absolute w-40 top-56 py-4 rounded-2xl border-2 bg-white'>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1 '>Home 1</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Home 2</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Home 3</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1' >Home 4</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Home 5</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Home 6</li>
            </ul>
            </HoverDiv>
            <h2 className='hover:text-[#3BB77E] cursor-pointer'>About</h2>
            <HoverDiv className='flex gap-2 cursor-pointer'><h2 className='hover:text-[#3BB77E]'>Shop</h2><IoIosArrowDown className='mt-1.5 p-0.5'/>
            <ul className='absolute w-60 top-56 py-4 rounded-2xl border-2 px-4 bg-white'>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Shop Grid-Right Sider</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Shop Grid-Left Sider</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Shop List-Right Sider</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Shop List-Left Sider</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Single Products</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Shop Chart</li>
            </ul>
            </HoverDiv>
            <HoverDiv className='flex gap-2 cursor-pointer'><h2 className='hover:text-[#3BB77E]'>Vendors</h2><IoIosArrowDown className='mt-1.5 p-0.5'/>
            <ul className='absolute w-60 top-56 py-4 rounded-2xl border-2 px-4 bg-white'>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vendors List</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vendors Grid</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vender 2</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vender 3</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vender 4</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Vender 5</li>
            </ul>
            </HoverDiv>
            <div className='flex gap-2 hover:text-[#3BB77E] cursor-pointer'><h2 className='hover:text-[#3BB77E]' >Mega menu</h2> <IoIosArrowDown className='mt-1.5 p-0.5'/>
            </div>
            <HoverDiv className='flex gap-2 cursor-pointer'><h2 className='hover:text-[#3BB77E]'>Blog</h2> <IoIosArrowDown className='mt-1.5 p-0.5'/>
            <ul className='absolute w-60 top-56 py-4 rounded-2xl border-2 px-4 bg-white'>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Blog Category List</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Blog Category Grid</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Blog Category Flex</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Blog Category </li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Blog Category UL</li>
            </ul></HoverDiv>
            <HoverDiv className='flex gap-2 cursor-pointer'><h2 className='hover:text-[#3BB77E]'>Pages</h2> <IoIosArrowDown className='mt-1.5 p-0.5'/>
            <ul className='absolute w-60 top-56 py-4 rounded-2xl border-2 px-4 bg-white'>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>About</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Contact</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>My Account</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Login</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Register</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Forget Password</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Reset Password</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Privacy Policy</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>Term and Server</li>
                <li className='hover:text-[#3BB77E] hover:bg-slate-200 px-2 py-1'>404 error</li>
            </ul></HoverDiv>
            <div className='hover:text-[#3BB77E] cursor-pointer'>Contact</div>
        </div>
        <div className='flex gap-2'>
            <BsHeadset className='text-4xl opacity-80 mt-3'/>
            <div>
                <h1 className='text-[26px] m-0 font-extrabold text-[#3BB77E]'>1900 - 888</h1>
                <p className='text-xs -mt-2 tracking-wider'>24/7 Support center</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
