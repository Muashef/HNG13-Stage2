import React from 'react'

const Footer = () => {
  return (
     <footer className="mt-12 py-6">
      <div className="max-w-app mx-auto px-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TicketWave — built with accessibility in mind.
      </div>
    </footer>
  )
}

export default Footer