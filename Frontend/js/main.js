const landingPage = document.getElementById("landing-page");
const vistaServicios = document.getElementById("vista-servicios");
const contenedorServicios = document.getElementById("contenedor-servicios");
const tituloCategoria = document.getElementById("titulo-categoria-seleccionada");

let serviciosGlobal = [];

// 1. Cargar datos en memoria al inicio (sin mostrar nada aún)
async function iniciar() {
    try {
        const res = await fetch("http://localhost:3300/servicios");
        const data = await res.json();
        serviciosGlobal = data.payload;
        console.log("Servicios listos:", serviciosGlobal);
    } catch (error) {
        console.error("Error conectando al back:", error);
    }
}

// 2. Acción al hacer clic en "Control de Plagas" o "Seguridad"
function mostrarListado(categoria) {
    // Ocultamos toda la Landing Page
    landingPage.classList.add("hidden");
    
    // Mostramos la vista de listado
    vistaServicios.classList.remove("hidden");
    
    // Ponemos el título correcto
    tituloCategoria.innerText = categoria;

    // Filtramos
    const filtrados = serviciosGlobal.filter(s => s.categoria === categoria);
    renderizar(filtrados);
    
    // Llevamos la pantalla arriba de todo
    window.scrollTo(0, 0);
}

// 3. Botón "Volver"
function volverInicio() {
    vistaServicios.classList.add("hidden");
    landingPage.classList.remove("hidden");
    contenedorServicios.innerHTML = ""; // Limpiamos
}

// 4. Dibujar las tarjetas pequeñas (Servicios individuales)
function renderizar(lista) {
    contenedorServicios.innerHTML = "";

    if(lista.length === 0) {
        contenedorServicios.innerHTML = "<p style='text-align:center'>Próximamente más servicios en esta categoría.</p>";
        return;
    }

    lista.forEach(servicio => {
        const imagenSrc = servicio.imagen ? `img/${servicio.imagen}` : 'https://via.placeholder.com/300';
        
        const mensajeWsp = `Hola, consulto por: ${servicio.nombre}`;
        const linkWsp = `https://wa.me/5491100000000?text=${encodeURIComponent(mensajeWsp)}`;

        const html = `
            <div class="card">
                <img src="${imagenSrc}" alt="${servicio.nombre}">
                <div class="card-body">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.descripcion}</p>
                    <a href="${linkWsp}" target="_blank" class="btn-whatsapp">Consultar por Whatsapp</a>
                </div>
            </div>
        `;
        contenedorServicios.innerHTML += html;
    });
}

// Arrancar
iniciar();