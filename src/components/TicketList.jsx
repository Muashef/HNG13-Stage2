const statusColors = {
  open: "bg-green-500/20 text-green-400 border-green-500/50",
  "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/50",
  closed: "bg-red-500/20 text-red-400 border-red-500/50",
}

const priorityColors = {
  low: "text-slate-400",
  medium: "text-yellow-400",
  high: "text-red-400",
}

export default function TicketList({ tickets, onEdit, onDelete }) {
  if (tickets.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-800/30 border border-slate-700 rounded-xl">
        <p className="text-slate-400 text-lg">No tickets found. Create one to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">{ticket.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[ticket.status]}`}>
                  {ticket.status.replace("-", " ")}
                </span>
              </div>
              <p className="text-slate-400 mb-3">{ticket.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className={`font-medium ${priorityColors[ticket.priority]}`}>
                  Priority: {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                </span>
                <span className="text-slate-500">Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(ticket)}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition text-white"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this ticket?")) {
                    onDelete(ticket.id)
                  }
                }}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition border border-red-500/50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
