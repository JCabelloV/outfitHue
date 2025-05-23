import { useState, useEffect, useCallback } from "react";

type Color = [number, number, number];
type Palette = Color[];

interface UsePaletteResult {
  palette: Palette | null;
  loading: boolean;
  error: string | null;
  regenerate: () => void;
}

export function usePalette(): UsePaletteResult {
  const [palette, setPalette] = useState<Palette | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPalette = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/api/palette", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Error al obtener la paleta");
      const data = await res.json();
      setPalette(data.result);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPalette();
  }, [fetchPalette]);

  return { palette, loading, error, regenerate: fetchPalette };
}

