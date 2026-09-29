
function Peliculas() {

    let peliculas = [
        {
            id: 1,
            titulo: "Interestelar",
            director: "Christopher Nolan",
            genero: "Ciencia ficción",
            año: 2014,
            duracion: 169
        },
        {
            id: 2,
            titulo: "El Padrino",
            director: "Francis Ford Coppola",
            genero: "Drama",
            año: 1972,
            duracion: 175
        },
        {
            id: 3,
            titulo: "Pulp Fiction",
            director: "Quentin Tarantino",
            genero: "Crimen",
            año: 1994,
            duracion: 154
        },
        {
            id: 4,
            titulo: "El Señor de los Anillos",
            director: "Peter Jackson",
            genero: "Fantasía",
            año: 2001,
            duracion: 178
        },
        {
            id: 5,
            titulo: "Matrix",
            director: "Lana Wachowski",
            genero: "Ciencia ficción",
            año: 1999,
            duracion: 136
        },
        {
            id: 6,
            titulo: "Titanic",
            director: "James Cameron",
            genero: "Romance",
            año: 1997,
            duracion: 195
        },
        {
            id: 7,
            titulo: "Avengers: Endgame",
            director: "Anthony Russo",
            genero: "Acción",
            año: 2019,
            duracion: 181
        },
        {
            id: 8,
            titulo: "El Caballero de la Noche",
            director: "Christopher Nolan",
            genero: "Acción",
            año: 2008,
            duracion: 152
        },
        {
            id: 9,
            titulo: "Toy Story",
            director: "John Lasseter",
            genero: "Animación",
            año: 1995,
            duracion: 81
        },
        {
            id: 10,
            titulo: "Coco",
            director: "Lee Unkrich",
            genero: "Animación",
            año: 2017,
            duracion: 105
        }
    ]

    return (
        <div>

            <h1>Catálogo de Películas</h1>

            {peliculas.map((pelicula) => (
                <div className="tarjeta" key={pelicula.id}>

                    <h2>{pelicula.titulo}</h2>

                    <p>ID: {pelicula.id}</p>
                    <p>Director: {pelicula.director}</p>
                    <p>Género: {pelicula.genero}</p>
                    <p>Año: {pelicula.año}</p>
                    <p>Duración: {pelicula.duracion} minutos</p>

                </div>
            ))}

        </div>
    )
}

export default Peliculas;

