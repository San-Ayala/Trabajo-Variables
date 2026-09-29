function Canciones() {

    let canciones = [
        {
            id: 1,
            titulo: "Misanthropy",
            artista: "Decalius ",
            album: "Dejected (EP)",
            año: 2021
        },
        {
            id: 2,
            titulo: "Hello juliet",
            artista: "Clarion",
            album: "(Sencillo / EP)",
            año: 2025
        },
        {
            id: 3,
            titulo: "the resistance",
            artista: "Skillet",
            album: "Unleashed",
            año: 2017
        },
        {
            id: 4,
            titulo: "Forest green",
            artista: "flyingfish",
            album: "The Way Night Falls",
            año: 2023
        },
        {
            id: 5,
            titulo: "Smells Like Teen Spirit",
            artista: "Nirvana",
            album: "Nevermind",
            año: 1991
        },
        {
            id: 6,
            titulo: "Numb",
            artista: "Linkin Park",
            album: "Discovery",
            año: 2003
        },
        {
            id: 7,
            titulo: "La locura esta en mi",
            artista: "Porta",
            album: "Reset",
            año: 2011
        },
        {
            id: 8,
            titulo: "HERO.",
            artista: "Skillet",
            album: "Awake",
            año: 2012
        }
    ];

    return (
        <div>

            <h1>Tabla de Canciones</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Artista</th>
                        <th>Álbum</th>
                        <th>Año</th>
                    </tr>
                </thead>

                <tbody>

                    {canciones.map((cancion) => (
                        <tr key={cancion.id}>
                            <td>{cancion.id}</td>
                            <td>{cancion.titulo}</td>
                            <td>{cancion.artista}</td>
                            <td>{cancion.album}</td>
                            <td>{cancion.año}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}

export default Canciones;