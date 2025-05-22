import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let cachedPalette = null;
let cachedDate = null;

//  Endpoint 1: daily palette

app.post('/api/palette', async (req, res) => {
  const today = new Date().toISOString().slice(0,10);
  if (cachedPalette && cachedDatev === today) {
    return res.json ({ result: cachedPalette });
  }

  try {
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' }),
    });
    if (!response.ok) throw new Error('Callback failed');

    const data = await response.json();
    cachedPalette = data.result;
    cachedDate = today;

    return res.json({ result: cachedPalette });
  } catch (err) {
    console.error("Error al obtener la paleta diaria: ", err);
    return res.status(500).json({ error: "error al obtener la paleta diaria" });
  }
});

//Endpoint 2:  not cached generator:

app.post('/api/palette/generate', async(req, res) => {
  try {
    const response = await fetch('https://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' }),
    });

    if(!response.ok) throw new Error('Respuesta no valida');

    const data = await response.json();
    return res.json({ result: data.result });
  } catch (err) {
    console.error('Error al general paleta: ', err);
    return res.status(500).json({ error: 'Error al generar paleta' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});

