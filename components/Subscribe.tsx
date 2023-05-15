import Image from "next/image";
import React from "react";
import banner10 from "../images/banner-10.png";
import banner9 from "../images/banner-9.png";
import { FaRegPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="w-[94%] max-w-[100rem] m-auto mb-4 relative ">
      <Image src={banner10} alt="banner" className="rounded-2xl" />
      <Image
        src={banner9}
        alt="banner"
        width={600}
        className="absolute bottom-0 right-10"
      />
      <div className="absolute top-[19%] left-[6%]">
        <h1 className="text-[45px] font-extrabold w-[80%] opacity-80 leading-[50px]">
          Stay home & get your daily needs from our shop
        </h1>
        <h2 className="my-9 text-xl font-semibold text-[#7E7E7E] mt-4">
        Start You'r Daily Shopping with<span>Nest Mart</span> 
        </h2>
        <div className="flex bg-white w-[43.5%] rounded-full mt-5">
          <FaRegPaperPlane className="text-[#7E7E7E] m-6" />
          <div className="w-[100%] ">
            <input className="py-4 w-[62%]" placeholder="Your email address" />
            <button className="bg-[#3BB77E] py-5 px-9 text-white rounded-full text-right">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
