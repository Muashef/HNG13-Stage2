import { Navigate } from "react-router-dom"
import { sessionStorage } from "../utils/Storage"

export default function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.isLoggedIn()

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}
