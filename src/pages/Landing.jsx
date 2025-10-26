import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { sessionStorage } from "../utils/Storage"

const Landing = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = sessionStorage.getCurrentUser()
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  }

  const handleLogout = () => {
    sessionStorage.clearCurrentUser()
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TicketFlow
          </div>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-4 py-2 text-slate-300 hover:text-white transition"
                >
                  Dashboard
                </button>
                <button onClick={handleLogout} className="px-4 py-2 text-slate-300 hover:text-white transition">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-slate-300 hover:text-white transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        {/* Wavy Background */}
        <svg className="absolute top-0 left-0 w-full h-96 opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z" fill="url(#waveGradient)" />
        </svg>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Manage Your Tickets
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A modern ticket management system designed for teams that value simplicity and efficiency. Track, organize,
            and resolve tickets with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105 cursor-pointer"
            >
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-slate-500 hover:border-slate-300 rounded-lg font-semibold text-lg transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose TicketFlow?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Simple & Intuitive",
              description: "Clean interface that anyone can use without training",
              icon: "✨",
            },
            {
              title: "Real-time Updates",
              description: "Instant synchronization across all your devices",
              icon: "⚡",
            },
            {
              title: "Secure & Private",
              description: "Your data stays with you, always encrypted and safe",
              icon: "🔒",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>TicketFlow - Hackathon Stage 2 | Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default Landing 
