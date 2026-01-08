const contenedor = document.getElementById('contenedor');

// Función para obtener datos de la API
async function obtenerPersonajes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        mostrarDatos(data.results);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Función para pintar las tarjetas en el HTML
function mostrarDatos(personajes) {
    personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
            <p>${personaje.species}</p>
        `;
        contenedor.appendChild(card);
    });
}

obtenerPersonajes();