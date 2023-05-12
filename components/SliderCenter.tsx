import Image from 'next/image';
import React from 'react'
import slider1 from '../images/slider-1.png'
import slider2 from '../images/slider-2.png'
import { FaRegPaperPlane } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collectAppConfig } from 'next/dist/build/utils';
const SliderCenter = () => {

    const settings = {
       dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrow: false,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />
      };

      function CustomNextArrow(props : any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red", fontSize: "30px", color: "black"}}
            onClick={onClick}
          />
        );
      }
      
      function CustomPrevArrow(props : any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
  return (
    <div className='m-auto w-[94%] max-w-[100rem] my-7 '>
        <Slider {...settings} className='bg-400'>
      <div className='rounded-lg relative'>
        <Image src={slider1} alt='slider-1' className='rounded-[30px]'/>
        <div className='absolute top-[19%] left-[6%]'>
            <h1 className='text-[75px] font-extrabold w-[70%] opacity-80 leading-[70px]'>Don't miss amazing grocery deals</h1>
            <h2 className='my-9 text-3xl font-semibold text-[#7E7E7E]'>Sign up for the daily newsletter</h2>
            <div className='flex bg-white w-[39%] rounded-full mt-16'>
                <FaRegPaperPlane className='text-[#7E7E7E] m-6'/>
                <div className='w-[92%] '>
                    <input className='py-4 w-[63%]' placeholder='Your email address'/>
                    <button className='bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>

      <div className='rounded-lg relative'>
        <Image src={slider2} alt='slider-2' className='rounded-[30px]'/>
        <div className='absolute top-[19%] left-[6%]'>
            <h1 className='text-[75px] font-extrabold w-[70%] opacity-80 leading-[70px]'>Fresh Vegetables Big discount</h1>
            <h2 className='my-9 text-3xl font-semibold text-[#7E7E7E]'>Save up to 50% off on your first order</h2>
            <div className='flex bg-white w-[43.5%] rounded-full mt-16'>
                <FaRegPaperPlane className='text-[#7E7E7E] m-6'/>
                <div className='w-[97%] '>
                    <input className='py-4 w-[63%]' placeholder='Your email address'/>
                    <button className='bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
        </Slider>
    </div>
  )
}

export default SliderCenter;
