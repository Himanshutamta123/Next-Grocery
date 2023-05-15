import React, { useState } from "react";
import product1 from ".././images/product-1-1.jpg";
import product11 from ".././images/product-1-2.jpg";
import product21 from ".././images/product-2-1.jpg";
import product22 from ".././images/product-2-2.jpg";
import product31 from ".././images/product-3-1.jpg";
import product32 from ".././images/product-3-2.jpg";
import product41 from ".././images/product-4-1.jpg";
import product42 from ".././images/product-4-2.jpg";
import product51 from ".././images/product-5-1.jpg";
import product52 from ".././images/product-5-2.jpg";
import product61 from ".././images/product-6-1.jpg";
import product62 from ".././images/product-6-2.jpg";
import product71 from ".././images/product-7-1.jpg";
import product72 from ".././images/product-7-2.jpg";
import product81 from ".././images/product-8-1.jpg";
import product82 from ".././images/product-8-2.jpg";
import product91 from ".././images/product-9-1.jpg";
import product92 from ".././images/product-9-2.jpg";
import product101 from ".././images/product-10-1.jpg";
import product102 from ".././images/product-10-2.jpg";
import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import styled from "styled-components";

const Popular = () => {
  const [hovered, setHovered] = useState(false);

  const HoverDiv = styled.div`
    ul {
      display: none;
    }

    &:hover ul {
      display: flex;
    }
  `;

  const productData = [
    {
      lf: "Hot",
      product1: product1,
      product11: product11,
      name: "snack",
      about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      company: "NestFood",
      discount: "$28.85",
      mrp: "$32.8",
      color: "#f74b81",
    },
    {
      lf: "Sale",
      product1: product21,
      product11: product22,
      name: "Hodo Foods",
      about: "All Natural Italian-Style Chicken Meatballs",
      company: "Stouffer",
      discount: "$52.85 ",
      mrp: "$55.8",
      color: "#67bcee",
    },
    {
      lf: "New",
      product1: product31,
      product11: product32,
      name: "snack",
      about: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      company: "StarKist",
      discount: "$48.85 ",
      mrp: "$52.8",
      color: "#3BB77E",
    },
    {
      lf: "",
      product1: product41,
      product11: product42,
      name: "Vegetables",
      about: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      company: "NestFood",
      discount: "$17.85",
      mrp: "$19.8",
      color:"white"
    },
    {
      lf: "-14%",
      product1: product51,
      product11: product52,
      name: "Pet Foods",
      about: "Blue Diamond Almonds Lightly Salted Vegetables",
      company: "NestFood",
      discount: "$23.85",
      mrp: "$25.8",
      color: "#f59758",
    },
    {
      lf: "",
      product1: product61,
      product11: product62,
      name: "Hodo Foods",
      about: "Chobani Complete Vanilla Greek Yogurt",
      company: "NestFood",
      discount: "$54.85",
      mrp: "$55.8",
      color:"white"
    },
    {
      lf: "",
      product1: product71,
      product11: product72,
      name: "Meats",
      about: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      company: "NestFood",
      discount: "$32.85",
      mrp: "$33.8",
      color:"white"
    },
    {
      lf: "Sale",
      product1: product81,
      product11: product82,
      name: "snack",
      about: "Encore Seafoods Stuffed Alaskan Salmon",
      company: "NestFood",
      discount: "$$38.85",
      mrp: "$37.8",
      color: "#67bcee",
    },
    {
      lf: "Hot",
      product1: product91,
      product11: product92,
      name: "Coffes",
      about: "Gorton’s Beer Battered Fish Fillets with soft paper",
      company: "Old El Paso",
      discount: "$23.85",
      mrp: "$25.8",
      color: "#f74b81",
    },
    {
      lf: "",
      product1: product101,
      product11: product102,
      name: "Cream",
      about: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
      company: "Tyson",
      discount: "$22.85",
      mrp: "$24.8",
      color:"white"
    },
  ];
  return (
    <div className="w-[96%] max-w-[100rem] m-auto mt-14">
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl font-bold opacity-80">Popular Products</h1>
        <ul className="flex gap-6 font-semibold opacity-90">
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            All
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Milk & Dairies
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Coffes & Teas
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Pet Foods
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Meats
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Vegetables
          </li>
          <li className="cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75">
            Fruits
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-7">
        {productData.map((items) => {
          return (
            <HoverDiv
              className="border-[1px] rounded-2xl relative p-5 cursor-pointer hover:shadow-lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <ul className="absolute border-[1px] border-[#3BB77E] top-[25%] bg-white rounded-lg left-[28%]">
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
                className="w-14 rounded-tl-xl  rounded-br-2xl text-sm text-white px-4 absolute top-0 left-0 py-1 "
                style={{ background: items.color }}
              >
                {items.lf}
              </p>
              <Image
                src={hovered ? items.product11 : items.product1}
                width={240}
                alt="product1"
                className="ml-3.5"
              />
              <p className="text-sm font-bold text-[#adadad] py-2 hover:text-[#3BB77E] cursor-pointer">
                {items.name}
              </p>
              <h2 className="text-base font-semibold hover:text-[#3BB77E] cursor-pointer leading-6 ">
                {items.about}
              </h2>
              <h4 className="text-[#adadad] font-semibold py-3">
                By
                <span className="text-[#3BB77E] cursor-pointer hover:text-[#f59758]">
                  {items.company}
                </span>
              </h4>
              <div className="flex justify-between">
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  {items.discount}
                  <span className="pl-4 text-base text-[#adadad] line-through">
                    {items.mrp}
                  </span>
                </h3>
                <button className="flex text-[#3BB77E] font-bold bg-[#DEF9EC] px-4 rounded-sm py-1 hover:bg-[#3BB77E] hover:text-white hover:-translate-y-1 duration-75">
                  <RiShoppingCart2Line className="m-1" />
                  Add
                </button>
              </div>
            </HoverDiv>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
