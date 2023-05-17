import Allproducts from '@/components/Allproducts'
import Banner from '@/components/Banner'
import Bestseller from '@/components/Bestseller'
import Deals from '@/components/Deals'
import Facility from '@/components/Facility'
import Feature from '@/components/Feature'
import Popular from '@/components/Popular'
import SliderCenter from '@/components/SliderCenter'
import Subscribe from '@/components/Subscribe'
import Layout from '@/layout/Layout'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <Layout>
        <SliderCenter />
        <Feature />
        <Banner />
        <Popular />
        <Bestseller />
        <Deals />
        <Allproducts />
        <Subscribe />
        <Facility />
      </Layout>
    </main>
  )
}
