// components/PaletteDisplay.tsx
import React from 'react';

type Color = [number, number, number];

interface PaletteDisplayProps {
  title: string;
  palette: Color[] | null;
  loading?: boolean;
  error?: string | null;
}

export function PaletteDisplay({ title, palette, loading, error }: PaletteDisplayProps) {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>{title}</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        palette && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
            {palette.map((color, index) => {
              const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: rgb,
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <div style={{ marginTop: '8px', fontSize: '12px' }}>{rgb}</div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

