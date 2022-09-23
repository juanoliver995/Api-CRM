import { useState, useEffect } from "react"
import Client from "../components/Client"
import Loader from "../components/Loader"
const Index = () => {
    const [clients, setClients] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getClients = async () => {
            const url = import.meta.env.VITE_API_URL
            try {
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClients(resultado)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getClients()
    }, [])

    const handleDelete = async (id) => {
        const confirmar = confirm("¿Deseas eliminar este cliente?")
        if (confirmar) {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url, {
                    method: "DELETE"
                })
                await respuesta.json()
                const arrayClients = clients.filter(client => client.id !== id)
                setClients(arrayClients)
            } catch (error) {
                console.log(error)
            }
        }
    }

    if (isLoading) return (<Loader />)

    return (
        <>
            <h1 className=" text-blue-900 font-bold text-4xl">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            <table className=" w-full mt-5 table-auto shadow bg-white">
                <thead>
                    <tr className=" bg-blue-800 text-white">
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <Client key={client.id} client={client} handleDelete={handleDelete} />
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Index