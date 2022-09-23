import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogIn from "./layout/LogIn"
import Layout from "./layout/Layout"
import LoginForm from "./pages/LoginForm"
import Index from "./pages/Index"
import NewClient from "./pages/NewClient"
import EditClient from "./pages/EditClient"
import ViewClient from "./pages/ViewClient"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LogIn />}>
          <Route index element={<LoginForm />} />
        </Route>

        <Route path="/clients" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ViewClient />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
