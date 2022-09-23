import { Outlet, Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation()
    const urlActual = location.pathname
    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 py-10 px-5">
                <h2 className="text-4xl font-black text-white text-center">CRM - CLIENTES</h2>
                <nav className="mt-10">
                    <Link to="/clients" className={`${urlActual == "/clients" ? "text-blue-300 " : "text-white"} hover:text-blue-300 block  font-bold text-xl`}>Clientes</Link>
                    <Link to="/clients/new" className={`${urlActual == "/clients/new" ? "text-blue-300 " : "text-white"} hover:text-blue-300 block  font-bold text-xl`}>Nuevo Cliente</Link>
                </nav>
            </div>
            <div className="md:w-3/4 p-10 bg-gray-100 md:h-screen overflow-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout