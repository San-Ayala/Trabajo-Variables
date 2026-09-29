
import Libro from "./componentes/libro"
import Ciudades from "./componentes/ciudades";
import Canciones from "./componentes/tablaCanciones";
import Animales from "./componentes/listaAnimales";
import Videojuegos from "./componentes/TablaVideojuegos";
import Equipo from "./componentes/equipoFutbol";
import Peliculas from "./componentes/CatalogoPeliculas";
import Menu from "./componentes/MenuResturante";

function App() {

    return (
        <div>
            <Libro />
            <Ciudades />
            <Canciones />
            <Animales />
            <Videojuegos />
            <Equipo />
            <Peliculas />
            <Menu />
        </div>
    );
}

export default App;