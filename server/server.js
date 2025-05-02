import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/palette', async (req, res) => {
  try {
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error al obtener la paleta:', err);
    res.status(500).json({ error: 'Error al obtener la paleta' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});

