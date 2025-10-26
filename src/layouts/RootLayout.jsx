import React from 'react'
// import Header from '../component/Header'
import Footer from '../component/Footer'

const RootLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
        {/* <Header /> */}

        <main className='flex-1 w-full'>
            {children}
        </main>

        <Footer />
    </div>
  )
}

export default RootLayout