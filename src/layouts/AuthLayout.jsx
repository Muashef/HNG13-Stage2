import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>

          <main className='flex-1 w-full'>
            {children}
          </main>

    </div>
  )
}

export default AuthLayout