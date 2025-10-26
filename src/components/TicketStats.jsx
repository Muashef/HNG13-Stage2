export default function TicketStats({ tickets }) {
  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in-progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[
        { label: "Total Tickets", value: stats.total, color: "from-slate-600 to-slate-700" },
        { label: "Open", value: stats.open, color: "from-green-600 to-green-700" },
        { label: "In Progress", value: stats.inProgress, color: "from-blue-600 to-blue-700" },
        { label: "Closed", value: stats.closed, color: "from-red-600 to-red-700" },
      ].map((stat, idx) => (
        <div key={idx} className={`bg-linear-to-br ${stat.color} rounded-xl p-6 border border-slate-700`}>
          <p className="text-slate-300 text-sm font-medium mb-2">{stat.label}</p>
          <p className="text-3xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
