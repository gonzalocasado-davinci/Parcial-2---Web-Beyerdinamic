import {useState} from "react";
import { addProducto} from "../api";

export default function ProductForm( {onAdded}) {
    const [nombre, setNombre] = userState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = userState("");

    async function handleSubmit (e) {
        e.preventDefault();
        const nuevo = {nombre, precio, imagen};
        await addProducto(nuevo);
        onAdded();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre" value={nombre} onChange = {e => setNombre(e.target.value)} />
            <input placeholder="Precio" value={precio} onChange = {e => setPrecio(e.target.value)} />
            <input placeholder="Imagen URL" value={imagen} onChange = {e => setImagen(e.target.value)} />
            <button>Agregar</button>
        </form>
    )
}