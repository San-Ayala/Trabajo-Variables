function Ciudades() {

    let ciudades = [
        "Bogotá",
        "Medellín",
        "Cali",
        "Popayán",
        "Pasto",
        "Cartagena",
        "Barranquilla",
        "Manizales",
        "Pereira",
        "Armenia"
    ];

    return (
        <div>

            <h1>Ciudades de Colombia</h1>

            <ul>
                {ciudades.map((ciudad) => (
                    <li key={ciudad}>
                        {ciudad}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Ciudades;