import Bottom from '@/components/Bottom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Textnav from '@/components/Textnav'
import React from 'react'

const Layout = (props : any) => {
  return (
    <div>
      <div><Header /></div>
      <div><Textnav /></div>
      <div><Navbar /></div>
      <div>
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
      <Bottom />
    </div>
  )
}

export default Layout
