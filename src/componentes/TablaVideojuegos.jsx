function Videojuegos() {

    let videojuegos = [
        {
            id: 1,
            nombre: "Minecraft",
            plataforma: "PC",
            genero: "Supervivencia",
            año: 2011
        },
        {
            id: 2,
            nombre: "Hollow Knight",
            plataforma: "PC",
            genero: "Metroidvania",
            año: 2017
        },
        {
            id: 3,
            nombre: "Resident Evil 4",
            plataforma: "PC",
            genero: "Terror",
            año: 2005
        },
        {
            id: 4,
            nombre: "Halo Infinite",
            plataforma: "Xbox",
            genero: "Shooter",
            año: 2021
        },
        {
            id: 5,
            nombre: "Gears 5",
            plataforma: "Xbox",
            genero: "Shooter",
            año: 2019
        },
        {
            id: 6,
            nombre: "Black souls 2",
            plataforma: "PC",
            genero: "RPG",
            año: 2010
        },
        {
            id: 7,
            nombre: "Dark Souls",
            plataforma: "PC",
            genero: "RPG de acción",
            año: 2011
        },
        {
            id: 8,
            nombre: "Blasphemous",
            plataforma: "PC",
            genero: "Metroidvania",
            año: 2019
        }
    ];

    return (
        <div>

            <h1>Tabla de Videojuegos</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Género</th>
                        <th>Año</th>
                    </tr>
                </thead>

                <tbody>

                    {videojuegos.map((videojuego) => (
                        <tr key={videojuego.id}>
                            <td>{videojuego.id}</td>
                            <td>{videojuego.nombre}</td>
                            <td>{videojuego.plataforma}</td>
                            <td>{videojuego.genero}</td>
                            <td>{videojuego.año}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}

export default Videojuegos;