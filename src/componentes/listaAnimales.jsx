function Animales() {

    let animales = [
        {
            nombre: "León",
            especie: "Mamífero",
            habitat: "Sabana"
        },
        {
            nombre: "Tigre",
            especie: "Mamífero",
            habitat: "Selva"
        },
        {
            nombre: "Águila",
            especie: "Ave",
            habitat: "Montañas"
        },
        {
            nombre: "Delfín",
            especie: "Mamífero",
            habitat: "Océano"
        },
        {
            nombre: "Tortuga",
            especie: "Reptil",
            habitat: "Mar"
        },
        {
            nombre: "Pingüino",
            especie: "Ave",
            habitat: "Antártida"
        },
        {
            nombre: "Elefante",
            especie: "Mamífero",
            habitat: "Sabana"
        },
        {
            nombre: "Cocodrilo",
            especie: "Reptil",
            habitat: "Ríos"
        },
        {
            nombre: "Oso polar",
            especie: "Mamífero",
            habitat: "Ártico"
        },
        {
            nombre: "Jirafa",
            especie: "Mamífero",
            habitat: "Sabana"
        }
    ];

    return (
        <div>

            <h1>Lista de Animales</h1>

            {animales.map((animal) => (
                <div key={animal.nombre}>

                    <h2>{animal.nombre}</h2>

                    <p>Especie: {animal.especie}</p>

                    <p>Hábitat: {animal.habitat}</p>

                </div>
            ))}

        </div>
    );
}

export default Animales;