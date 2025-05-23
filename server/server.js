import express from 'express';
import cors from 'cors';
import paletteRoutes from './routes/palette.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', paletteRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
