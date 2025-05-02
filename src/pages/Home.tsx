import React, { useEffect, useState } from 'react';
import { usePalette } from '../hooks/usePalette'

function Home() {
  const {palette, loading, error} = usePalette();

  useEffect(() => {
    const fetchPalette = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/palette', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener la paleta');
        }

        const data = await response.json();
        setPalette(data.result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPalette();
  }, []);

  if (loading) return <p>Cargando paleta...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ paddingBottom: '60px', textAlign: 'center', marginTop: '40px' }}>
      <h1>Bienvenido a OutfitHue</h1>
      <p>Descubre tu paleta de colores diaria para vestir mejor cada día.</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Paleta del día</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
          {palette.map((color, index) => {
            const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: rgb,
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }} />
                <div style={{ marginTop: '8px', fontSize: '12px' }}>{rgb}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

