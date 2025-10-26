// localStorage utility functions for user and ticket management

export const storageKeys = {
  USERS: "users",
  CURRENT_USER: "currentUser",
  TICKETS: "tickets",
}

export const userStorage = {
  getAll: () => {
    try {
      return JSON.parse(localStorage.getItem(storageKeys.USERS) || "[]")
    } catch {
      return []
    }
  },

  add: (user) => {
    const users = userStorage.getAll()
    const newUser = {
      id: Date.now().toString(),
      ...user,
      createdAt: new Date().toISOString(),
    }
    users.push(newUser)
    localStorage.setItem(storageKeys.USERS, JSON.stringify(users))
    return newUser
  },

  findByEmail: (email) => {
    const users = userStorage.getAll()
    return users.find((u) => u.email === email)
  },

  findById: (id) => {
    const users = userStorage.getAll()
    return users.find((u) => u.id === id)
  },
}

export const sessionStorage = {
  setCurrentUser: (user) => {
    localStorage.setItem(storageKeys.CURRENT_USER, JSON.stringify(user))
  },

  getCurrentUser: () => {
    try {
      return JSON.parse(localStorage.getItem(storageKeys.CURRENT_USER) || "null")
    } catch {
      return null
    }
  },

  clearCurrentUser: () => {
    localStorage.removeItem(storageKeys.CURRENT_USER)
  },

  isLoggedIn: () => {
    return sessionStorage.getCurrentUser() !== null
  },
}

export const ticketStorage = {
  getAll: () => {
    try {
      return JSON.parse(localStorage.getItem(storageKeys.TICKETS) || "[]")
    } catch {
      return []
    }
  },

  getUserTickets: (userId) => {
    const tickets = ticketStorage.getAll()
    return tickets.filter((t) => t.userId === userId)
  },

  add: (ticket, userId) => {
    const tickets = ticketStorage.getAll()
    const newTicket = {
      id: Date.now().toString(),
      ...ticket,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    tickets.push(newTicket)
    localStorage.setItem(storageKeys.TICKETS, JSON.stringify(tickets))
    return newTicket
  },

  update: (ticketId, updates) => {
    const tickets = ticketStorage.getAll()
    const index = tickets.findIndex((t) => t.id === ticketId)
    if (index !== -1) {
      tickets[index] = {
        ...tickets[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      localStorage.setItem(storageKeys.TICKETS, JSON.stringify(tickets))
      return tickets[index]
    }
    return null
  },

  delete: (ticketId) => {
    const tickets = ticketStorage.getAll()
    const filtered = tickets.filter((t) => t.id !== ticketId)
    localStorage.setItem(storageKeys.TICKETS, JSON.stringify(filtered))
  },

  getById: (ticketId) => {
    const tickets = ticketStorage.getAll()
    return tickets.find((t) => t.id === ticketId)
  },
}
