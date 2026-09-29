
function Menu() {

    let platos = [
        {
            id: 1,
            nombre: "Hamburguesa clásica",
            categoria: "Hamburguesas",
            precio: 18000
        },
        {
            id: 2,
            nombre: "Pizza de pepperoni",
            categoria: "Pizza",
            precio: 22000
        },
        {
            id: 3,
            nombre: "Pasta carbonara",
            categoria: "Pastas",
            precio: 20000
        },
        {
            id: 4,
            nombre: "Ensalada César",
            categoria: "Ensaladas",
            precio: 14000
        },
        {
            id: 5,
            nombre: "Pollo a la plancha",
            categoria: "Platos fuertes",
            precio: 25000
        },
        {
            id: 6,
            nombre: "Lasaña",
            categoria: "Pastas",
            precio: 23000
        },
        {
            id: 7,
            nombre: "Perro caliente",
            categoria: "Comidas rápidas",
            precio: 15000
        },
        {
            id: 8,
            nombre: "Sopa de verduras",
            categoria: "Sopas",
            precio: 12000
        },
        {
            id: 9,
            nombre: "Arroz con pollo",
            categoria: "Platos fuertes",
            precio: 21000
        },
        {
            id: 10,
            nombre: "Brownie con helado",
            categoria: "Postres",
            precio: 10000
        }
    ]

    return (
        <div>

            <h1>Menú del Restaurante</h1>

            {platos.map((plato) => (
                <div className="tarjeta" key={plato.id}>

                    <h2>{plato.nombre}</h2>

                    <p>ID: {plato.id}</p>
                    <p>Categoría: {plato.categoria}</p>
                    <p>Precio: ${plato.precio}</p>

                </div>
            ))}

        </div>
    )
}

export default Menu;

