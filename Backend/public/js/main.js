const landingPage = document.getElementById("landing-page");
const vistaServicios = document.getElementById("vista-servicios");
const contenedorServicios = document.getElementById("contenedor-servicios");
const tituloCategoria = document.getElementById("titulo-categoria-seleccionada");

let serviciosGlobal = [];

// 1. Cargar datos en memoria al inicio (sin mostrar nada aún)
async function iniciar() {
    try {
        const res = await fetch("/servicios");
        const data = await res.json();
        serviciosGlobal = data.payload;
        console.log("Servicios listos:", serviciosGlobal);
    } catch (error) {
        console.error("Error conectando al back:", error);
    }
}

// 2. Acción al hacer clic en "Control de Plagas" o "Seguridad"
function mostrarListado(categoria) {
    history.pushState ({seccion: 'listado'}, "","")
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
        
        const mensajeWsp = `Hola! Quiero consultar por este servicio: ${servicio.nombre}`;
        const linkWsp = `https://wa.me/5491139341118?text=${encodeURIComponent(mensajeWsp)}`;

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
// Abrimos la lista de cada metodologia de trabajo
const infoMetodologia = {

    'obras': {
        titulo: 'Gestión y ejecución de obras',
        contenido: `
            <ul>
                <li>Estudio de caracterización de sitios Fase 1 y Fase 2.</li>
                <li>Estudios hidrogeológicos de acuerdo con Res 227/23 APRA Y 94/14 MAPBA.</li>
                <li>Monitoreo de suelo y agua subterránea.</li>
                <li>Evaluaciones de riesgo a la salud humana para sitios potencialmente contaminados RBCA (Risk-Based Corrective Action).</li>
                <li>Estudios de línea de base ambiental.</li>
                <li>Caracterización de sitios y manejo de residuos.</li>
                <li>Disposición final de residuos eventuales con manifiesto.</li>
                <li>Calidad del agua.</li>
                <li>Gestión APRA Agencia de Protección Ambiental GCBA; ACUMAR Cuenca Matanza Riachuelo; DGROC; DGIUR; Ministerio de Ambiente Provincia de Buenos Aires; ADA Autoridad Del Agua; INA Instituto Nacional del Agua.</li>
                <li>Auditoría técnica 1102/2004 Secretaría de Energía de la Nación.</li>
                <li>Cegado e inertizado de tanques de combustibles (Certificados).</li>
                <li>Cambios de tanques en estaciones de servicios para ampliación de capacidad.</li>
                <li>Erradicación de tanques SASH, SAAH.</li>
                <li>Excepción de retiro de tanques SASH.</li>
                <li>Construcción de pozos freáticos para monitoreo / Construcción de pozos de explotación.</li>
                <li>Transporte y tratamiento de residuos industriales.</li>
                <li>Gestión y emisión de certificados de tratamientos y/o disposición final de residuos.</li>
            </ul>
        `
    },
    'muestreo': {
        titulo: 'Instrumental de Muestreo',
        contenido: `
            <ul>
                <li>pH-metro / Conductímetro.</li>
                <li>Analizador in situ de Oxígeno disuelto.</li>
                <li>Sonda de interface marca Solinst (30m).</li>
                <li>Sonda para medición de nivel en agua subterránea.</li>
                <li>Analizador de campo de cloro libre.</li>
                <li>Analizador de campo de cloro total.</li>
                <li>Analizador de gases de combustión.</li>
                <li>Kit tubo Pitot S + manómetro para medir velocidad en conductos.</li>
                <li>Bombas de muestreo de aire de alto y bajo caudal. Funcionamiento 12v y/o 220V.</li>
                <li>Ciclón para muestreo PM total.</li>
                <li>Ciclón para muestreo de PM10.</li>
                <li>Impactador para muestreo de PM2.5.</li>
                <li>Anemómetro.</li>
                <li>Estación meteorológica inalámbrica.</li>
                <li>Tren de muestreo manual isocinético EPA 5.</li>
                <li>Calibrador primario de caudales marca Gilian (rango 20 cc/in a 30 L/min).</li>
                <li>Detector portátil de CO.</li>
                <li>Detector portátil de CO2.</li>
                <li>Detector de Nivel de Explosividad (Drager).</li>
                <li>Barreno manual para sondeos hasta 5m.</li>
                <li>Draga manual para muestreo de sedimentos en cuerpos de agua.</li>
                <li>Disco de Secchi (Transparencia).</li>
                <li>Bote semirrígido de 3.80 m de largo para muestreo en cuerpos de agua (hasta 550 kg).</li>
                <li>Mallas para muestreo de agua para Fito y Zooplancton. Conservadoras con termómetro digital para control de temperatura durante el traslado.</li>
            </ul>
        `
    }
};

// 2. Función para abrir la ventana
function abrirModal(clave) {
    // Cambiamos el texto dinámicamente
    document.getElementById('modal-titulo').innerText = infoMetodologia[clave].titulo;
    document.getElementById('modal-cuerpo').innerHTML = infoMetodologia[clave].contenido;
    
    document.getElementById('modal-info').classList.remove('hidden');
}

// 3. Función para cerrar la ventana
function cerrarModal() {
    document.getElementById('modal-info').classList.add('hidden');
}
window.addEventListener('popstate', function(event) {
    // Si el estado es "null", significa que volvimos al principio de todo (la Landing Page)
    if (event.state === null) {
        // Usamos tu función existente para volver a mostrar la portada
        volverInicio();
    }
})






// Arrancar
iniciar();