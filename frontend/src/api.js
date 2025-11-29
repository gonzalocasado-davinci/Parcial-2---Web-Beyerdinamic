const API_URL = "http://localhost:3000/producots";

export async function getProducts(){
    const res = await fetch(API_URL);
    return res.json();
}

export async function addProducto(producto) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(producto)
    });
    return res.json();
}
