import HomePage from "@/pages/home"
import NotFoundGuestPage from "@/pages/not-found-guest-page"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundGuestPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default AppRouter
