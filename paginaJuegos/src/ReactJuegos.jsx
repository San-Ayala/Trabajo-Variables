
function Juegos() {

    // Variables
    let nombrePagina = "Grand Guignol";
    let descripcion = "Página en donde puedes buscar cualquier info de tu juego favorito";
    let plataforma = "PC";
    let cantidadJuegos = 8;


    let videojuegos = [
        {
            id: 1,
            nombre: "Minecraft",
            genero: "Supervivencia",
            año: 2011,

        },
        {
            id: 2,
            nombre: "Hollow Knight",
            genero: "Metroidvania",
            año: 2017
        },
        {
            id: 3,
            nombre: "Resident Evil 4",
            genero: "Terror",
            año: 2005
        },
        {
            id: 4,
            nombre: "Halo",
            genero: "Acción",
            año: 2001
        },
        {
            id: 5,
            nombre: "Gears of War",
            genero: "Acción",
            año: 2006
        },
        {
            id: 6,
            nombre: "Terraria",
            genero: "Aventura",
            año: 2011
        },
        {
            id: 7,
            nombre: "Cuphead",
            genero: "Plataformas",
            año: 2017
        },
        {
            id: 8,
            nombre: "Blasphemous",
            genero: "Metroidvania",
            año: 2019
        }
    ];

    return (
        <div>

            {/* Información principal */}
            
            <section>

                <h1>{nombrePagina}</h1>

                <h2>Bienvenido a Grand Guignol</h2>

                <p>{descripcion}</p>

                <p>Plataforma principal: {plataforma}</p>

                <p>Cantidad agregada actualmente: {cantidadJuegos}</p>

            </section>


            {/* Lista */}

            <section>

                <h2>Género</h2>

                <ul>
                    <li>Acción</li>
                    <li>Aventura</li>
                    <li>Terror</li>
                    <li>Supervivencia</li>
                    <li>Plataformas</li>
                    <li>Metroidvania</li>
                </ul>

            </section>


            {/* Información con map */}

            <section>

                <h2>Catálogo</h2>

                {videojuegos.map((juego) => (

                    <div className="tarjeta" key={juego.id}>

                        <h2>{juego.nombre}</h2>

                        <p>ID: {juego.id}</p>

                        <p>Género: {juego.genero}</p>

                        <p>Año: {juego.año}</p>


                    </div>

                ))}

            </section>


            {/* tabla */}

            <section>

                <h2>Información</h2>

                <table>

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Videojuego</th>
                            <th>Género</th>
                            <th>Año</th>
                        </tr>

                    </thead>

                    <tbody>

                        {videojuegos.map((juego) => (

                            <tr key={juego.id}>

                                <td>{juego.id}</td>
                                <td>{juego.nombre}</td>
                                <td>{juego.genero}</td>
                                <td>{juego.año}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>

        </div>
    );
}

export default Juegos;

