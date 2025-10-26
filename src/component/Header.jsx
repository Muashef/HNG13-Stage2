// import React from 'react'
// import { getSession, clearSession } from '../utils/Storage'
// import { Link, useNavigate } from 'react-router-dom'

// const Header = () => {
//      const session = getSession()
//   const navigate = useNavigate()

//   function handleLogout(){
//     clearSession()
//     navigate('/login')
//   }

//   return (
//     <header className="bg-white py-4 mb-6 shadow-sm">
//       <div className="max-w-app mx-auto px-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-lg bg-linear-to-br from-slate-100 to-white shadow-soft flex items-center justify-center text-2xl font-bold text-accent">TW</div>
//           <div>
//             {/* <Link to="/" className="text-lg font-extrabold text-slate-800">TicketWave</Link> */}
//             <div className="text-sm text-slate-500">streamlined ticket management</div>
//           </div>
//         </div>

//         <nav className="flex items-center gap-3">
//           <Link to="/" className="text-slate-700 hidden md:inline">Home</Link>
//           <Link to="/app" className="text-slate-700 hidden md:inline">Dashboard</Link>
//           {!session ? (
//             <>
//               <Link to="/login" className="px-3 py-1 rounded-md text-accent border border-accent">Login</Link>
//               <Link to="/signup" className="px-3 py-1 rounded-md bg-accent text-blue border border-accent">Sign up</Link>
//             </>
//           ) : (
//             <>
//               <span className="text-sm text-slate-600">Hi, {session.user.name}</span>
//               <button onClick={handleLogout} className="px-3 py-1 rounded-md border">Logout</button>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header