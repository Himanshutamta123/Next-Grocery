import React from "react";
import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import styled from "styled-components";
import {useState, useEffect} from 'react'
 

const Popular = () => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    const fetchUserData = () : any => {
      setLoading(true)
      fetch("https://fakestoreapi.com/products?limit=10")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
        setLoading(false)
    }
    fetchUserData()
  }, [])
  console.log(users)
  

  return (
    <div className="w-[96%] max-w-[100rem] m-auto mt-14">
      <div className="flex justify-between mb-7 flex-wrap">
        <h1 className="text-3xl font-bold opacity-80 max-sm:mb-3">Popular Products</h1>
        <ul className="flex gap-6 font-semibold opacity-90 flex-wrap max-sm:gap-2">
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
      <div className="flex flex-wrap gap-7 justify-center">
        {users.map((items) => {
          return (
            <HoverDiv
              className="border-[1px] rounded-2xl relative p-5 cursor-pointer hover:shadow-lg w-[297px] "
            >
              <ul className="absolute border-[1px] border-[#3BB77E] top-[25%] bg-white rounded-lg left-[28%] z-50">
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
                style={{ background: "#67bcee" }}
              >
                Sale
              </p>
              <Image
                src={items.image}
                width={230}
                height={240}  
                alt="product1"
                className="image1 ml-3.5 h-[270px]"
              />
              <p className="text-sm font-bold text-[#adadad] py-2 hover:text-[#3BB77E] cursor-pointer">
                {items.category}
              </p>
              <h2 className="text-base font-semibold hover:text-[#3BB77E] cursor-pointer leading-6 ">
                {items.title}
              </h2>
              <h4 className="text-[#adadad] font-semibold py-3">
                By 
                <span className="text-[#3BB77E] cursor-pointer hover:text-[#f59758] ml-2">
                   Gucci
                </span>
              </h4>
              <div className="flex justify-between">
                <h3 className="font-bold text-lg text-[#3BB77E]">
                  {items.price}
                  <span className="pl-4 text-base text-[#adadad] line-through">
                    $55.8
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


const HoverDiv = styled.div`
    ul {
      display: none;
    }

    &:hover ul {
      display: flex;
    }


      /* transition ease-in-out hover:scale-125 duration-300 */

  `;