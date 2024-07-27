import React from 'react'
import NavBar from '../_components/NavBar';
import Footer from '../_components/Footer/Footer';
export default function layout({children}: {children: React.ReactNode}) {
  return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
  )
}
