-- ============================================
-- Base de Datos: ecoservicios
-- Tablas para Control de Plagas y Seguridad e Higiene y Gestiones
-- ============================================

USE ecoservicios;


CREATE TABLE IF NOT EXISTS `control de plagas` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(500),
    precio DECIMAL(10,2),
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `seguridad e higiene y medioambiente` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(500),
    precio DECIMAL(10,2),
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `control de plagas` (nombre, descripcion, imagen,) VALUES
('Fumigaciones', ' MIP, control de insectos rastreros y voladores con productos domisanitarios, cebos y biolarvicidas orgánicos (BTI).', 'fumigacion.jpg',)
('Control de Roedores', 'MIP, uso de trampas mecánicas y/o pegamentosas.', 'roedores.png',)
('Desinfección', 'Pulverización ULV, con sales de amonio cuaternario.', 'controlplagas.jpg',);
('Limpieza y Sanitización', 'Servicio profesional de limpieza profunda y sanitización de ambientes.', 'desinfeccion.jpg',);


INSERT INTO `seguridad e higiene y medioambiente` (nombre, descripcion, imagen,) VALUES
('Auditoría de Higiene', 'Evaluación completa de las condiciones de higiene y seguridad. Informe detallado incluido.', 'seguridadehigiene.jpg',)
('Capacitación en Seguridad', 'Cursos certificados de manipulación de alimentos y prevención de riesgos laborales.', 'capacitacion.jpg', )

INSERT INTO `gestiones` (nombre, descripcion, imagen, precio) VALUES (
    'Gestión y ejecución de obras',
    '<ul>
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
    </ul>',
    'obras.jpg', 
    0.00
);