import { useNavigate } from "react-router-dom"

const Client = ({ client, handleDelete }) => {
    const navigate = useNavigate()

    const { name, empresa, email, telefono, notas, id } = client
    return (
        <>
            <tr className="border-b hover:bg-gray-50">
                <td className="p-3 text-center">{name}</td>
                <td className="p-3 text-center">
                    <p><span className="text.gray-800 uppercase font-bold">Email: </span>{email}</p>
                    <p><span className="text.gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
                </td>
                <td className="p-3 text-center">{empresa}</td>
                <td className="p-3 text-center">
                    <button onClick={() => navigate(`/${id}`)} type="button" className="bg-yellow-400 hover:bg-yellow-500 block w-full text-white p-2 uppercase font-bold text-xs">Ver</button>
                    <button onClick={() => navigate(`/edit/${id}`)} type="button" className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">Editar</button>
                    <button onClick={() => handleDelete(id)} type="button" className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default Client