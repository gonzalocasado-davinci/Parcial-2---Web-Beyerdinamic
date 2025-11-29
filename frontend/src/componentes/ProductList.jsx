import {useEffect, useState} from "react";
import {getProducts} from "../api";

export default function ProductList() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        cargar();
    }, []);

    async function cargar() {
        const datos = await getProductos();
        setLista(datos);
    }

    return(

        <div>
            <h2>
                Lista de Productos
            </h2>
            {lista.map((p,i)=> (
                <div key={i}>
                    <h3>{p.nombre}</h3>
                    <p>Precio: ${p.precio}</p>
                    <img src={p.imagen} witdth="150"/>
                </div>
            ))}
        </div>
    );
}