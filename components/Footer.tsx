import Image from 'next/image'
import React from 'react'
import logo from '../images/nestlogo.png'
import { CiLocationOn } from 'react-icons/ci';
import { BsHeadset } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import appstore from '../images/app-store.jpg'
import googleplay from '../images/google-play.jpg'
import payment from '../images/payment-method.png'
import styled from 'styled-components';




const Footer = () => {
  return (
    <div className='w-[94%] max-w-[100rem] m-auto mb-6 flex gap-5 flex-wrap py-7 border-b-[1px] border-[#3BB77E] justify-center'>
      <div className=' text-[#020202] w-[300px]'>
        <Image src={logo} alt='logo' />
        <h1 className=' py-3 text-lg'>Awesome grocery store website template</h1>
        <h3 className='flex py-1' ><span className='flex'><CiLocationOn className='text-[#3BB77E] mr-1.5 text-lg'/>Address:</span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</h3>
        <h3 className='flex py-1'><BsHeadset className='text-[#3BB77E] mr-1.5 text-lg'/><span className='font-semibold'>Call Us:</span>(+91) - 540-025-124553</h3>
        <h3 className='flex py-1'><FaRegPaperPlane className='text-[#3BB77E] mr-1.5 text-lg'/><span className='font-semibold'>Email:</span>sale@Nest.com</h3>
        <h3 className='flex py-1'><FaRegClock className='text-[#3BB77E] mr-1.5 text-lg'/><span className='font-semibold'>Hours:</span>10:00 - 18:00, Mon - Sat</h3>
          </div>
      <div className=' col-span-3 flex gap-x-24 flex-wrap w-[950px]'>
        <ListDiv>
            <h1 className='text-2xl font-bold pb-4'>Company</h1>
            <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
            </ul>
        </ListDiv>
        <ListDiv>
            <h1 className='text-2xl font-bold pb-4'>Account</h1>
            <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare products</li>
            </ul>
        </ListDiv>
        <ListDiv>
            <h1 className='text-2xl font-bold pb-4'>Corporate</h1>
            <ul>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Privacy Policy</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
            </ul>
        </ListDiv>
        <ListDiv>
            <h1 className='text-2xl font-bold pb-4'>Popular</h1>
            <ul>
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
            </ul>
        </ListDiv>
      </div>
      <div className='text-[##1a2329] w-[300px]'>
        <h1 className='text-2xl font-bold pb-4'>Install App</h1>
        <p className='pb-6'>From App Store or Google Play</p>
        <div className='flex gap-4 pb-9'>
        <Image src={appstore} alt="appstore" width={140} height={100} className='hover:-translate-y-1 duration-200 cursor-pointer'/>
        <Image src={googleplay} alt="appstore" width={140} height={100} className='hover:-translate-y-1 duration-200 cursor-pointer'/>
        </div>
        <p className='pb-4'>Secured Payment Gateways</p>
        <Image src={payment} alt="appstore" />
      </div>
    </div>
  )
}

export default Footer


const ListDiv = styled.div`
ul{
    li{
        padding-bottom: 17px;
        color: #161e23;
        font-weight: 500;
        cursor: pointer;
    }

    li:hover{
        translate: 5px;
        transition-duration: 0.3s;
        color: #3BB77E;
    }
}
`;