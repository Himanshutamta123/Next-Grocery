import React from "react";
import Image from "next/image";
import stars from "../images/stars.webp";
import thumbnail1 from "../images/thumbnail-1.jpg";
import thumbnail2 from "../images/thumbnail-2.jpg";
import thumbnail3 from "../images/thumbnail-3.jpg";
import thumbnail4 from "../images/thumbnail-4.jpg";
import thumbnail5 from "../images/thumbnail-5.jpg";
import thumbnail6 from "../images/thumbnail-6.jpg";
import thumbnail7 from "../images/thumbnail-7.jpg";
import thumbnail8 from "../images/thumbnail-8.jpg";
import thumbnail9 from "../images/thumbnail-9.jpg";
import thumbnail10 from "../images/thumbnail-10.jpg";
import thumbnail11 from "../images/thumbnail-11.jpg";
import thumbnail12 from "../images/thumbnail-12.jpg";

const topSellingData = [
  {
    img: thumbnail1,
    para: "Nestle Original Coffee-Mate Coffee Creamer",
  },
  {
    img: thumbnail2,
    para: "Nestle Original Coffee-Mate Coffee Creamer",
  },
  {
    img: thumbnail3,
    para: "Nestle Original Coffee-Mate Coffee Creamer",
  },
];

const trendingData = [
    {
      img: thumbnail4,
      para: "Organic Cage-Free Grade A Large Brown Eggs",
    },
    {
      img: thumbnail5,
      para: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    },
    {
      img: thumbnail6,
      para: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
    },
  ];

  const  recentlyData = [
   
    {
      img: thumbnail7,
      para: "Pepperidge Farm Farmhouse Hearty White Bread",
    },
    {
      img: thumbnail8,
      para: "Organic Frozen Triple Berry Blend",
    },
    {
      img: thumbnail9,
      para: "Oroweat Country Buttermilk Bread",
    },
  ];
  
  const topData = [
      {
        img: thumbnail10,
        para: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      },
      {
        img: thumbnail11,
        para: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      },
      {
        img: thumbnail12,
        para: "All Natural Italian-Style Chicken Meatballs",
      },
    ];
const Allproducts = () => {
  return (
    <div className="w-[96%] m-auto max-w-[100rem] mt-36 grid grid-cols-4 gap-6 mb-16">
      <div>
        <h1 className="text-2xl font-extrabold pb-5 border-b-[2px] ">
          Top Selling
        </h1>
        {topSellingData.map((items) => {
          return (
            <div className="flex gap-6 pt-7 hover:-translate-y-1 duration-200 cursor-pointer    ">
              <Image
                src={items.img}
                alt="fkd"
                width={100}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold">
                  {items.para}
                </h1>
                <div className="flex py-1">
                  <Image src={stars} alt="star" width={70} />
                  <span className="text-sm text-[#7E7E7E">(4.0)</span>
                </div>
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  $34.55
                  <span className="pl-3 text-sm text-[#adadad] line-through">
                    $54.8
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-2xl font-extrabold pb-5 border-b-[2px] ">
          Trending Products
        </h1>
        {trendingData.map((items) => {
          return (
            <div className="flex gap-6 pt-7 hover:-translate-y-1 duration-200 cursor-pointer    ">
              <Image
                src={items.img}
                alt="fkd"
                width={100}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold">
                  {items.para}
                </h1>
                <div className="flex py-1">
                  <Image src={stars} alt="star" width={70} />
                  <span className="text-sm text-[#7E7E7E">(4.0)</span>
                </div>
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  $34.55
                  <span className="pl-3 text-sm text-[#adadad] line-through">
                    $54.8
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-2xl font-extrabold pb-5 border-b-[2px] ">
          Recently added
        </h1>
        {recentlyData.map((items) => {
          return (
            <div className="flex gap-6 pt-7 hover:-translate-y-1 duration-200 cursor-pointer    ">
              <Image
                src={items.img}
                alt="fkd"
                width={100}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold">
                  {items.para}
                </h1>
                <div className="flex py-1">
                  <Image src={stars} alt="star" width={70} />
                  <span className="text-sm text-[#7E7E7E">(4.0)</span>
                </div>
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  $34.55
                  <span className="pl-3 text-sm text-[#adadad] line-through">
                    $54.8
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-2xl font-extrabold pb-5 border-b-[2px] ">
          Top Rated
        </h1>
        {topData.map((items) => {
          return (
            <div className="flex gap-6 pt-7 hover:-translate-y-1 duration-200 cursor-pointer    ">
              <Image
                src={items.img}
                alt="fkd"
                width={100}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold">
                  {items.para}
                </h1>
                <div className="flex py-1">
                  <Image src={stars} alt="star" width={70} />
                  <span className="text-sm text-[#7E7E7E">(4.0)</span>
                </div>
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  $34.55
                  <span className="pl-3 text-sm text-[#adadad] line-through">
                    $54.8
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
