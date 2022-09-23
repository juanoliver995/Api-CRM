import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"

const EditClient = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [client, setClient] = useState({})
    console.log(id)
    useEffect(() => {
        const getClient = async () => {
            try {
                const url = `http://localhost:3000/clients/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClient(resultado)
                console.log(resultado)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        getClient()
    }, [])
    return (
        <>

            {
                Object.keys(client).length === 0
                    ? <h2 className=" text-lg font-bold text-blue-900">Cliente ID no valido</h2>
                    : (
                        <>
                            <h1 className=" text-blue-900 font-bold text-4xl">Editar Cliente</h1>
                            <p className="mt-3">utiliza este formulario para editar tus clientes</p>
                            <Formulario client={client} isLoading={isLoading} />
                        </>
                    )
            }

        </>
    )
}

export default EditClient