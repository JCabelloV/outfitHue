import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

let cachedPalette = null;
let cachedDate = null;

// Generador local
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
}

function generatePalette(count = 5) {
  return Array.from({ length: count }, generateRandomColor);
}

// Endpoint: paleta diaria con fallback
router.post('/palette', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);

  if (cachedPalette && cachedDate === today) {
    return res.json({ result: cachedPalette });
  }

  try {
    const response = await fetch('https://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' }),
    });

    if (!response.ok) throw new Error('Colormind no responde');

    const data = await response.json();
    if (!data.result || !Array.isArray(data.result)) {
      throw new Error('Respuesta inválida');
    }

    cachedPalette = data.result;
    cachedDate = today;

    console.log('[COLORMIND] Paleta diaria obtenida');
    return res.json({ result: cachedPalette });

  } catch (err) {
    console.warn('[FALLBACK] Usando paleta local por error:', err.message);

    const fallbackPalette = generatePalette();
    cachedPalette = fallbackPalette;
    cachedDate = today;

    return res.json({ result: fallbackPalette });
  }
});

// Endpoint: generador libre con fallback
router.post('/palette/generate', async (req, res) => {
  try {
    const response = await fetch('https://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' }),
    });

    if (!response.ok) throw new Error('Colormind no responde');

    const data = await response.json();
    if (!data.result || !Array.isArray(data.result)) {
      throw new Error('Respuesta inválida');
    }

    console.log('[COLORMIND] Paleta generada');
    return res.json({ result: data.result });

  } catch (err) {
    console.warn('[FALLBACK] Paleta aleatoria local por error:', err.message);
    return res.json({ result: generatePalette() });
  }
});

export default router;
