function Libro() {

    let titulo = "La peste escarlata";
    let autor = "Jack London";
    let año = "1915";
    let editorial = "Libros del zorro rojo";
    let paginas = "137";

    return (
        <div>

            <h1>Información del libro</h1>

            <p>Título: {titulo}</p>
            <p>Autor: {autor}</p>
            <p>Año: {año}</p>
            <p>Editorial: {editorial}</p>
            <p>Páginas: {paginas}</p>

        </div>
    )
}
export default Libro;