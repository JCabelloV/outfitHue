import { useState } from 'react';

type Color = [number, number, number];
type Palette = Color[];

export function usePaletteGenerator() {
  const [palette, setPalette] = useState<Palette | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/palette/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Error al generar paleta');

      const data = await res.json();
      setPalette(data.result);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { palette, loading, error, generate };
}
// hooks/usePaletteGenerator.ts
import { useState } from 'react';

type Color = [number, number, number];
type Palette = Color[];

export function usePaletteGenerator() {
  const [palette, setPalette] = useState<Palette | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/palette/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Error al generar paleta');

      const data = await res.json();
      setPalette(data.result);
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { palette, loading, error, generate };
}

