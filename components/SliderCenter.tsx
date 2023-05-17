import Image from 'next/image';
import React from 'react'
import slider1 from '../images/slider-1.png'
import slider2 from '../images/slider-2.png'
import { FaRegPaperPlane } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collectAppConfig } from 'next/dist/build/utils';
import styled from 'styled-components';
const SliderCenter = () => {

    const settings = {
       dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrow: false,
      // nextArrow: <CustomNextArrow />,
      // prevArrow: <CustomPrevArrow />
      };

      // function CustomNextArrow(props : any) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{  display: "block", background: "", color: "black", width:56 }}
      //       onClick={onClick}
      //     />
      //   );
      // }
      
      // function CustomPrevArrow(props : any) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{  display: "block", background: "",  marginLeft:34, zIndex: 10 }}
      //       onClick={onClick}
      //     />
      //   );
      // }
  return (
    <div className='m-auto w-[94%] max-w-[100rem] my-7 rounded-lg '>
        <Slider {...settings} className='bg-400 rounded-lg'>
      <div className='rounded-lg relative bg-center max-md:h-[300px]'>
        <Image src={slider1} alt='slider-1' className='rounded-[30px] max-md:h-[300px]'/>
        <div className='absolute top-[19%] left-[6%] max-2xl:top-[13%] w-[80%]'>
            <H1 className='text-[75px] font-extrabold w-[70%] opacity-80 leading-[70px] max-xl:text-[60px] max-xl:leading-[60px] max-md:text-[35px] max-md:leading-[39px] max-md:w-[90%]'>Don't miss amazing grocery deals</H1>
            <h2 className='my-9 text-3xl font-semibold text-[#7E7E7E] max-2xl:my-5 max-md:text-xl'>Sign up for the daily newsletter</h2>
            <div className='flex bg-white w-[42.5%] rounded-full mt-16 max-xl:mt-10 max-md:w-[60%]'>
                <FaRegPaperPlane className='text-[#7E7E7E] m-6 max-md:m-3'/>
                <div className='w-[97%] '>
                    <input className='py-4 w-[70%] max-xl:w-[57%] max-md:py-2 max-md:w-[63%]' placeholder='Your email address' />
                    <button className='bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right max-md:py-2 max-md:px-5'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>

      <div className='rounded-lg relative max-md:h-[300px]'>
        <Image src={slider2} alt='slider-2' className='rounded-[30px] max-md:h-[300px]'/>
        <div className='absolute top-[19%] left-[6%] max-2xl:top-[13%] '>
            <H1 className='text-[75px] font-extrabold w-[70%] opacity-80 leading-[70px] max-xl:text-[60px] max-xl:leading-[60px] max-md:text-[35px] max-md:leading-[39px] max-md:w-[90%]'>Fresh Vegetables Big discount</H1>
            <h2 className='my-9 text-3xl font-semibold text-[#7E7E7E] max-2xl:my-5 max-md:text-xl max-md:my-2'>Save up to 50% off on your first order</h2>
            <div className='flex bg-white w-[43.5%] rounded-full mt-16 max-xl:mt-10 max-md:w-[60%]'>
                <FaRegPaperPlane className='text-[#7E7E7E] m-6 max-md:m-3'/>
                <div className='w-[97%] '>
                    <input className='py-4 w-[63%] max-xl:w-[52%] max-md:py-2 max-md:w-[55%]' placeholder='Your email address'/>
                    <button className='bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right max-md:py-2 max-md:px-5'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
        </Slider>
    </div>
  )
}

export default SliderCenter;

const H1 = styled.h1`
/* font-size: clamp(0px, 50%, 1000px); */
`;
