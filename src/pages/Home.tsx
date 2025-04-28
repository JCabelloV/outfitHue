import React from 'react';

function Home() {
  const palette: string[] = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'];

  return (
    <div style={{ paddingBottom: '60px', textAlign: 'center', marginTop: '40px' }}>
      <h1>Bienvenido a OutfitHue</h1>
      <p>Descubre tu paleta de colores diaria para vestir mejor cada día.</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Paleta del día</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
          {palette.map((color: string, index: number) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: color,
                borderRadius: '8px',
                border: '1px solid #ccc',
              }} />
              <div style={{ marginTop: '8px', fontSize: '12px' }}>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

