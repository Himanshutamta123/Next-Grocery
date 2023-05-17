import Image from "next/image";
import React from "react";
import banner10 from "../images/banner-10.png";
import banner9 from "../images/banner-9.png";
import { FaRegPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="w-[94%] max-w-[100rem] m-auto mb-4 relative max-md:h-[300px] max-xl:h-[300px]">
      <Image src={banner10} alt="banner" className="rounded-2xl max-md:h-[300px] max-xl:h-[300px]" />
      <Image
        src={banner9}
        alt="banner"
        className="absolute bottom-0 right-10 w-[40%] "
      />
      <div className="absolute top-[19%] left-[6%]  max-sm:w-[80%]">
        <h1 className="text-[45px] font-extrabold w-[80%] opacity-80 leading-[50px] max-md:text-[30px] max-md:leading-[35px] max-sm:w-[100%] max-sm:text-[20px] max-sm:leading-[25px] max-xl:text-[30px] max-xl:leading-8">
          Stay home & get your daily needs from our shop
        </h1>
        <h2 className="my-9 text-xl font-semibold text-[#7E7E7E] mt-4 max-md:text-base max-2xl:my-4">
        Start You'r Daily Shopping with<span>Nest Mart</span> 
        </h2>
        <div className="flex bg-white w-[60%] rounded-full mt-5 justify-between max-sm:w-[270px] max-2xl:mt-0">
          <div className="flex ">
          <FaRegPaperPlane className="text-[#7E7E7E] m-6 max-md:m-3" />
            <input className="py-4 max-md:py-2 " placeholder="Your email address" />
          </div>
          <div className=" ">
            <button className="bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right max-md:py-2 max-md:px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
