import ArticlePage from "@/pages/article-page"
import CategoryArticle from "@/pages/category-article"
import HomePage from "@/pages/home"
import NotFoundGuestPage from "@/pages/not-found-guest-page"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundGuestPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/artikel" element={<HomePage />} />
      <Route path="/artikel/:category" element={<CategoryArticle />} />
      <Route path="/artikel/:category/:slug" element={<ArticlePage />} />
    </Routes>
  )
}

export default AppRouter
