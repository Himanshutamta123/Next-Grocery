import Image from "next/image";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import banner5 from "../images/banner-5.png";
import banner6 from "../images/banner-6.png";
import banner7 from "../images/banner-7.png";
import banner8 from "../images/banner-8.png";
import stars from "../images/stars.webp";
import { RiShoppingCart2Line } from "react-icons/ri";


const dealsData = [
  {
    image: banner5,
    para:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
    company:"NestFood",
    mrp: "$32.85",
    discount: "$33.8"
  },
  {
    image: banner6,
    para:"Perdue Simply Smart Organics Gluten Free",
    company:"Old El Paso",
    mrp: "$24.85",
    discount: "$26.8"
  },
  {
    image: banner7,
    para:"Signature Wood-Fired Mushroom and Caramelized",
    company:"Progresso",
    mrp: "$12.85 ",
    discount: "$13.8"
  },
  {
    image: banner8,
    para:"Simply Lemonade with Raspberry Juice",
    company:"Yoplait",
    mrp: "$15.85 ",
    discount: "$16.8"
  },
];
const Deals = () => {
  return (
    <div className="w-[94%] m-auto max-w-[100rem]">
      <div className="flex justify-between my-5">
        <h1 className="text-3xl font-semibold opacity-90 ">Deals of the day</h1>
        <p className="flex text-[#7E7E7E] hover:text-[#3BB77E] font-semibold">
          All Deals
          <GrFormNext className="m-1 text-[#7E7E7E] hover:text-[#3BB77E] text-lg" />
        </p>
      </div>
      <div className="my-4 grid grid-cols-4 gap-6 ">
        {dealsData.map((items) => {
          return (
            <div className="relative">
              <Image src={items.image} alt="banner" className="rounded-2xl" />
              <div className="absolute top-[42%] w-[86%] left-[7%]">
                <div className="flex m-[7%] gap-5 text-center">
                    <div className="bg-white w-[25%] py-2 px-2 rounded-lg leading-4">
                  <p className="text-[#3BB77E] font-semibold text-xl hover:-translate-y-1 duration-150">679</p>
                  <h4 className="text-[#7E7E7E]">Days</h4>
                    </div>
                    <div className="bg-white w-[25%] py-2 px-2 rounded-lg leading-4">
                  <p className="text-[#3BB77E] font-semibold text-xl hover:-translate-y-1 duration-150">08</p>
                  <h4 className="text-[#7E7E7E]">Hours</h4>
                    </div>
                    <div className="bg-white w-[25%] py-2 px-2 rounded-lg leading-4">
                  <p className="text-[#3BB77E] font-semibold text-xl hover:-translate-y-1 duration-150">18</p>
                  <h4 className="text-[#7E7E7E] ">Mins</h4>
                    </div>
                    <div className="bg-white w-[25%] py-2 px-2 rounded-lg leading-4 ">
                  <p className="text-[#3BB77E] font-semibold text-xl hover:-translate-y-1 duration-150">00</p>
                  <h4 className="text-[#7E7E7E]">Sec</h4>
                    </div>
                </div>
                <div className="bg-white p-6 tracking-wide rounded-2xl shadow-lg mb-4 hover:-translate-y-1 duration-150">
                  <h1 className="font-bold">{items.para}</h1>
                  <div className="flex py-1"><Image src={stars} alt="star" width={70}/><span className="text-sm text-[#7E7E7E">(4.0)</span></div>
                  <h2 className="text-sm text-[#7E7E7E] font-semibold">
                    By <span className="text-[#3BB77E] hover:text-[#f59758] cursor-pointer">{items.company}</span>
                  </h2>
                  <div className="flex justify-between pt-4">
                    <h3 className="font-bold text-lg text-[#3BB77E]">
                      {items.mrp}
                      <span className="pl-3 text-sm text-[#adadad] line-through">
                        {items.discount}
                      </span>
                    </h3>
                    <button className="flex text-[#3BB77E] font-bold bg-[#DEF9EC] px-4 rounded-sm py-1 hover:bg-[#3BB77E] hover:text-white hover:-translate-y-1 duration-75">
                      <RiShoppingCart2Line className="m-1" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default Deals;
