import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import ErrorMessage from './ErrorMessage'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'



const Formulario = ({ client, isLoading }) => {

    const navigate = useNavigate()
    const newClientSchema = Yup.object().shape({
        name: Yup.string().min(3, "El nombre es muy corto").max(40, "El nombre es muy largo").required('El nombre es obligatorio'),
        empresa: Yup.string().required("El nombre de la empresa es obligatorio"),
        email: Yup.string().email("Email no valido").required("El email es obligatorio"),
        telefono: Yup.number().positive("Numero no valido").integer("Numero no valido").typeError("Numero no valido"),
        notas: '',
    })
    const handleSubmit = async (values) => {
        try {
            let respuesta = null
            if (client.id) {
                const url = `${import.meta.env.VITE_API_URL}/${client.id}`
                respuesta = await fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

            } else {
                const url = import.meta.env.VITE_API_URL
                respuesta = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
            }
            await respuesta.json()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {

            }
            {
                isLoading
                    ? <Loader />
                    : (
                        <div className=' bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                            <h1 className='text-xl text-blue-900 font-bold text-center'>{client?.name ? "Editar Cliente" : "Agregar Cliente"}</h1>
                            <Formik
                                initialValues={{
                                    name: client?.name ?? "",
                                    empresa: client?.empresa ?? "",
                                    email: client?.email ?? "",
                                    telefono: client?.telefono ?? "",
                                    notas: client?.notas ?? "",
                                }}
                                onSubmit={async (values, { resetForm }) => {
                                    await handleSubmit(values)

                                    resetForm()

                                }}
                                enableReinitialize={true}
                                validationSchema={newClientSchema}
                            >
                                {({ errors, touched }) => {
                                    return (
                                        <Form className='mt-10'>
                                            <div className='mb-4'>
                                                <label className='text-lg block text-gray-800' htmlFor='name'>Nombre</label>
                                                <Field
                                                    type="text"
                                                    placeholder="Nombre del cliente"
                                                    className="outline-blue-900 p-3 bg-gray-50 mt-2 block w-full"
                                                    id="name"
                                                    name="name"
                                                />
                                                {errors.name && touched.name ?
                                                    (<ErrorMessage>{errors.name}</ErrorMessage>) : null}
                                            </div>
                                            <div className='mb-4'>
                                                <label className='text-lg block text-gray-800' htmlFor='empresa'>Empresa</label>
                                                <Field
                                                    type="text"
                                                    placeholder="Empresa del cliente"
                                                    className="outline-blue-900 p-3 bg-gray-50 mt-2 block w-full"
                                                    id="empresa"
                                                    name="empresa"
                                                />
                                                {errors.empresa && touched.empresa ?
                                                    (<ErrorMessage>{errors.empresa}</ErrorMessage>) : null}
                                            </div>
                                            <div className='mb-4'>
                                                <label className='text-lg block text-gray-800' htmlFor='email'>Email</label>
                                                <Field
                                                    type="email"
                                                    placeholder="Email del cliente"
                                                    className="outline-blue-900 p-3 bg-gray-50 mt-2 block w-full"
                                                    id="email"
                                                    name="email"
                                                />
                                                {errors.email && touched.email ?
                                                    (<ErrorMessage>{errors.email}</ErrorMessage>) : null}
                                            </div>
                                            <div className='mb-4'>
                                                <label className='text-lg block text-gray-800' htmlFor='telefono'>Telefono</label>
                                                <Field
                                                    type="tel"
                                                    placeholder="Telefono del cliente"
                                                    className="outline-blue-900 p-3 bg-gray-50 mt-2 block w-full"
                                                    id="telefono"
                                                    name="telefono"
                                                />
                                                {errors.telefono && touched.telefono ?
                                                    (<ErrorMessage>{errors.telefono}</ErrorMessage>) : null}
                                            </div>
                                            <div className='mb-4'>
                                                <label className='text-lg block text-gray-800' htmlFor='notas'>Notas</label>
                                                <Field
                                                    as="textarea"
                                                    placeholder="Notas del cliente"
                                                    className="outline-blue-900 p-3 bg-gray-50 mt-2 block w-full h-40"
                                                    id="notas"
                                                    name="notas"
                                                />
                                            </div>
                                            <input type="submit" className="text-white font-bold uppercase w-full bg-blue-900 p-3" value={client?.name ? "Editar Cliente" : "Agregar Cliente"} />
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    )
            }
        </>
    )
}

Formulario.defaultProps = ({
    client: {},
    isLoading: false
})

export default Formulario