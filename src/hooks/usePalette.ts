import { useEffect, useState } from 'react';

export function usePalette() {
  const [palette, setPalette] = useState<number[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null> (null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:500/api/palette', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Error al obtener la paleta de colores');
        }

        const data = await response.json();
        setPalette(data.result);

      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { palette, loading, error };
}
