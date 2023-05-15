import Allproducts from '@/components/Allproducts'
import Banner from '@/components/Banner'
import Bestseller from '@/components/Bestseller'
import Deals from '@/components/Deals'
import Facility from '@/components/Facility'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Popular from '@/components/Popular'
import SliderCenter from '@/components/SliderCenter'
import Subscribe from '@/components/Subscribe'
import Textnav from '@/components/Textnav'
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='border-b border-[#ececec]'>
      <Header />
      </div>
      <div className='border-b border-[#ececec]'>
      <Textnav />
      </div>
      <div className='border-b border-[#ececec]'>
      <Navbar />
      </div>
      <SliderCenter />
      <Feature />
      <Banner />
      <Popular />
      <Bestseller />
      <Deals />
      <Allproducts />
      <Subscribe />
      <Facility />
    </main>
  )
}
