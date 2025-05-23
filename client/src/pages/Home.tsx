
import React from 'react';
import { usePalette } from '../hooks/usePalette';
import { usePaletteGenerator } from '../hooks/usePaletteGenerator';
import { PaletteDisplay } from '../components/PaletteDisplay';

function Home() {
  const { palette: dailyPalette, loading, error } = usePalette();
  const {
    palette: generatedPalette,
    loading: genLoading,
    error: genError,
    generate,
  } = usePaletteGenerator();

  return (
    <div style={{ paddingBottom: '60px', textAlign: 'center', marginTop: '40px' }}>
      <h1>Bienvenido a OutfitHue</h1>
      <p>Descubre tu paleta de colores diaria para vestir mejor cada día.</p>

      <PaletteDisplay title="🎯 Paleta del día" palette={dailyPalette} loading={loading} error={error} />

      <div style={{ marginTop: '50px' }}>
        <h2>🎨 Generador libre</h2>
        <button
          onClick={generate}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Generar nueva paleta
        </button>
        <PaletteDisplay title="Resultado generado" palette={generatedPalette} loading={genLoading} error={genError} />
      </div>
    </div>
  );
}

export default Home;

