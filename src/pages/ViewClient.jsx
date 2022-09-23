import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"


const ViewClient = () => {
    const { id } = useParams()
    const [client, setClient] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getClient = async () => {
            try {
                const url = `http://localhost:3000/clients/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClient(resultado)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        getClient()
    }, [])


    return (
        <>
            {isLoading
                ? <Loader></Loader>
                : (
                    Object.keys(client).length === 0
                        ? <h2 className=" text-lg font-bold text-blue-900">No hay informacion</h2>
                        : (
                            <div>
                                <h1 className=" text-blue-900 font-bold text-4xl">Ver cliente: {client.name}</h1>
                                <p className="mt-3">Informacion del cliente</p>


                                <p className="text-2xl text-gray-600 mt-10">
                                    <span className="uppercase text-gray-800 font-bold">Cliente: </span>
                                    {client.name}
                                </p>
                                <p className="text-2xl mt-4 text-gray-600">
                                    <span className="uppercase text-gray-800 font-bold">Email: </span>
                                    {client.email}
                                </p>
                                {
                                    client.telefono && (
                                        <p className="text-2xl mt-4 text-gray-600">
                                            <span className="uppercase font-bold text-gray-800">Telefono: </span>
                                            {client.telefono}
                                        </p>
                                    )
                                }
                                <p className="text-2xl mt-4 text-gray-600">
                                    <span className="uppercase text-gray-800 font-bold">Empresa: </span>
                                    {client.empresa}
                                </p>
                                {
                                    client.notas && (
                                        <p className="text-2xl mt-4 text-gray-600">
                                            <span className="uppercase text-gray-800 font-bold">Notas: </span>
                                            {client.notas}
                                        </p>
                                    )
                                }
                            </div>
                        )
                )
            }
        </>
    )
}

export default ViewClient