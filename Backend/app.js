const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
// 1. CONFIGURACIÓN DE LA BASE DE DATOS
const db = new Pool({
  connectionString: 'postgresql://postgres.njettbvmyyqucdondnwy:nicomacri925@aws-1-us-east-2.pooler.supabase.com:6543/postgres',
  ssl: {
    rejectUnauthorized: false 
  }
});

db.connect(err => {
    if (err) {
        console.error('❌ Error conectando:', err.message);
        return;
    }
    console.log('✅ Conectado a la Base de Datos en puerto 3307');
});

// 2. ENDPOINT INTELIGENTE
// Une tus dos tablas (Plagas y Seguridad) en una sola lista para la web
app.get('/servicios', (req, res) => {
    const sql = `
        SELECT id, nombre, descripcion, imagen, precio, 'Control de Plagas' as categoria 
        FROM control de plagas
        UNION
        SELECT id, nombre, descripcion, imagen, precio, 'Seguridad e Higiene' as categoria 
        FROM seguridad e higiene y medioambiente
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al consultar la base de datos' });
        }
        res.json({ payload: results.rows });
    });
});

const PORT = 3300;
app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});