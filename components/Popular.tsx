import React, {useState} from 'react'
import product1 from '.././images/product-1-1.jpg'
import product11 from '.././images/product-1-2.jpg'
import Image from 'next/image'
import { RiShoppingCart2Line } from 'react-icons/ri';





const Popular = () => {

    const [hovered, setHovered] = useState(false);
    const productData = [
        {
            lf: "Hot",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "Sale",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "New",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },{
            lf: "-14%",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "Sale",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },
        {
            lf: "New",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        },{
            lf: "",
            product1: product1,
            product11: product11,
            name: "snack",
            about: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            company: "NestFood",
            discount: "$28.85",
            mrp: '$32.8'
    
        }
    ]
  return (
    <div className='w-[96%] max-w-[100rem] m-auto mt-14'>
        <div className='flex justify-between mb-7'>
            <h1 className='text-3xl font-bold opacity-80'>Popular Products</h1>
            <ul className='flex gap-6 font-semibold opacity-90'>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>All</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Milk & Dairies</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Coffes & Teas</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Pet Foods</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Meats</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Vegetables</li>
            <li className='cursor-pointer hover:text-[#3BB77E] hover:-translate-y-1 duration-75'>Fruits</li>
            </ul>
        </div>
        <div className='grid grid-cols-5 gap-7'>
            {
                productData.map((items) => {
                    return(
                        <div className='border-[1px] rounded-2xl relative p-5 cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                            <p className='bg-red-400 w-14 rounded-tl-xl  rounded-br-2xl text-sm text-white px-4  absolute top-0 left-0'>{items.lf}</p>
                            <Image src={hovered ? items.product11 : items.product1} width={200} alt='product1' className='ml-8'/>
                            <p className='text-sm font-bold text-[#adadad] py-2 hover:text-[#3BB77E] cursor-pointer'>{items.name}</p>
                            <h2 className='text-lg font-semibold hover:text-[#3BB77E] cursor-pointer leading-5'>{items.about}</h2>
                            <h4 className='text-[#adadad] font-semibold py-3'>By <span className='text-[#3BB77E] cursor-pointer'>{items.company}</span></h4>
                            <div className='flex justify-between'>
                            <h3 className='font-bold text-lg text-[#3BB77E]'>{items.discount}<span className='pl-4 text-base text-[#adadad] line-through'>{items.mrp}</span></h3>
                            <button className='flex text-[#3BB77E] font-bold bg-[#DEF9EC] px-4 rounded-sm py-1 hover:bg-[#3BB77E] hover:text-white hover:-translate-y-1 duration-75'><RiShoppingCart2Line className='m-1'/>Add</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Popular

