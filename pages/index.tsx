import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
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
    </main>
  )
}
