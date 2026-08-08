import React, { useState, FormEvent } from 'react';

interface ClientesForm {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
}

const CreateClientes: React.FC = () => {
    const [clientes, setCliente] = useState<ClientesForm>({
        nombre: '',
        correo: '',
        telefono: '',
        direccion: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setCliente((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Aquí puedes conectar con tu API o gestor de estado
        console.log('Nuevo cliente:', clientes);
        setSubmitted(true);
    };

    return (
        <div style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
            <h1>Crear cliente</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={clientes.nombre}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        value={clientes.correo}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={clientes.telefono}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="direccion">Dirección</label>
                    <textarea
                        id="direccion"
                        name="direccion"
                        value={clientes.direccion}
                        onChange={handleChange}
                        rows={4}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 18px' }}>
                    Guardar cliente
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: 24, color: 'green' }}>
                    Cliente creado correctamente.
                </div>
            )}
        </div>
    );
};

export default CreateClientes;
