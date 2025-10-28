import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { sessionStorage, ticketStorage } from "../utils/Storage"
import TicketForm from "../components/TicketForm"
import TicketList from "../components/TicketList"
import TicketStats from "../components/TicketStats"
import toast from "react-hot-toast"

export default function Dashboard() {
  const navigate = useNavigate()
  const [tickets, setTickets] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingTicket, setEditingTicket] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    const user = sessionStorage.getCurrentUser()
    if (!user) {
      toast.error("Session expired. Please log in again.")
      navigate("/login")
      return
    }

    setCurrentUser(user)
    const userTickets = ticketStorage.getUserTickets(user.id)
    setTickets(userTickets)
  }, [navigate])

  const handleAddTicket = (ticketData) => {
    const newTicket = ticketStorage.add(ticketData, currentUser.id)
    setTickets([...tickets, newTicket])
    setShowForm(false)
    toast.success("Ticket added successfully!")
  }

 const handleUpdateTicket = (ticketData) => {
  if (!editingTicket) {
    toast.error("No ticket selected for update.")
    return
  }

  const updatedTicket = ticketStorage.update(editingTicket.id, ticketData)

  if (!updatedTicket) {
    toast.error("Failed to update ticket. Please try again.")
    return
  }

  setTickets((prev) =>
    prev.map((t) => (t.id === editingTicket.id ? updatedTicket : t))
  )

  setEditingTicket(null)
  setShowForm(false)
  toast.success("Ticket updated successfully ✅")
}

  const handleDeleteTicket = (ticketId) => {
    ticketStorage.delete(ticketId)
    setTickets(tickets.filter((t) => t.id !== ticketId))
    toast.success("Ticket deleted 🗑️")
  }

  const handleLogout = () => {
    sessionStorage.clearCurrentUser()
    toast("Logged out successfully 👋")
    navigate("/")
  }

  const filteredTickets = filterStatus === "all" ? tickets : tickets.filter((t) => t.status === filterStatus)

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TicketZen
            </h1>
            <p className="text-sm text-slate-400">Welcome, {currentUser.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <TicketStats tickets={tickets} />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {["all", "open", "in-progress", "closed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === status ? "bg-cyan-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setEditingTicket(null)
              setShowForm(!showForm)
            }}
            className="px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition"
          >
            {showForm ? "Cancel" : "+ New Ticket"}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <TicketForm
            onSubmit={editingTicket ? handleUpdateTicket : handleAddTicket}
            initialData={editingTicket}
            isEditing={!!editingTicket}
          />
        )}

        {/* Tickets List */}
        <TicketList
          tickets={filteredTickets}
          onEdit={(ticket) => {
            setEditingTicket(ticket)
            setShowForm(true)
          }}
          onDelete={handleDeleteTicket}
        />
      </main>
    </div>
  )
}
