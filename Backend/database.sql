-- ============================================
-- Base de Datos: ecoservicios
-- Tablas para Control de Plagas y Seguridad e Higiene
-- ============================================

USE ecoservicios;

-- Tabla: control de plagas
CREATE TABLE IF NOT EXISTS `control de plagas` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(500),
    precio DECIMAL(10,2),
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: seguridad e higiene y medioambiente
CREATE TABLE IF NOT EXISTS `seguridad e higiene y medioambiente` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen VARCHAR(500),
    precio DECIMAL(10,2),
    activo TINYINT(1) DEFAULT 1,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Datos de ejemplo - Control de Plagas
INSERT INTO `control de plagas` (nombre, descripcion, imagen, precio) VALUES
('Fumigación Integral', 'Servicio completo de fumigación profesional. Eliminamos todo tipo de insectos y plagas con productos certificados.', 'fumigacion.jpg', 5000),
('Control de Roedores', 'Sistema especializado para eliminación de roedores. Incluye seguimiento y prevención.', 'roedores.jpg', 4500),
('Desinsectación', 'Tratamiento contra cucarachas, moscas, mosquitos y otros insectos voladores y rastreros.', 'insectos.jpg', 4000);

-- Datos de ejemplo - Seguridad e Higiene
INSERT INTO `seguridad e higiene y medioambiente` (nombre, descripcion, imagen, precio) VALUES
('Auditoría de Higiene', 'Evaluación completa de las condiciones de higiene y seguridad. Informe detallado incluido.', 'auditoria.jpg', 8000),
('Capacitación en Seguridad', 'Cursos certificados de manipulación de alimentos y prevención de riesgos laborales.', 'capacitacion.jpg', 3500),
('Limpieza y Sanitización', 'Servicio profesional de limpieza profunda y sanitización de ambientes.', 'limpieza.jpg', 5500);
