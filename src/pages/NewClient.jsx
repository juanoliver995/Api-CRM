import Formulario from "../components/Formulario"
const NewClient = () => {
    return (
        <>
            <h1 className=" text-blue-900 font-bold text-4xl">Nuevo Cliente</h1>
            <p className="mt-3">Llena los siguientes campos para registrar un cliente</p>
            <Formulario />
        </>
    )
}

export default NewClient