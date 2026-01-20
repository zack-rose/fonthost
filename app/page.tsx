export default function Home() {
  const fonts = [
    { name: 'Neue Montreal Regular', file: 'NeueMontreal-Regular.otf' },
    { name: 'Neue Montreal Italic', file: 'NeueMontreal-Italic.otf' },
    { name: 'Neue Montreal Light', file: 'NeueMontreal-Light.otf' },
    { name: 'Neue Montreal Light Italic', file: 'NeueMontreal-LightItalic.otf' },
    { name: 'Neue Montreal Medium', file: 'NeueMontreal-Medium.otf' },
    { name: 'Neue Montreal Medium Italic', file: 'NeueMontreal-MediumItalic.otf' },
    { name: 'Neue Montreal Bold', file: 'NeueMontreal-Bold.otf' },
    { name: 'Neue Montreal Bold Italic', file: 'NeueMontreal-BoldItalic.otf' },
  ];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (
    process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000'
  );

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          Neue Montreal Font Host
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#888', maxWidth: '600px', margin: '0 auto' }}>
          Publicly hosted Neue Montreal font family with CORS enabled
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>
          Available Fonts
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {fonts.map((font) => (
            <div 
              key={font.file}
              style={{ 
                background: '#111', 
                padding: '1.5rem', 
                borderRadius: '8px',
                border: '1px solid #222'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
                {font.name}
              </h3>
              <div style={{ 
                background: '#0a0a0a', 
                padding: '1rem', 
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#4ade80',
                overflowX: 'auto',
                whiteSpace: 'nowrap'
              }}>
                {baseUrl}/fonts/{font.file}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #222' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Usage Example
        </h2>
        <pre style={{ 
          background: '#0a0a0a', 
          padding: '1.5rem', 
          borderRadius: '4px',
          overflowX: 'auto',
          fontSize: '0.875rem',
          color: '#4ade80'
        }}>
{`@font-face {
  font-family: 'Neue Montreal';
  src: url('${baseUrl}/fonts/NeueMontreal-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Neue Montreal';
  src: url('${baseUrl}/fonts/NeueMontreal-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

body {
  font-family: 'Neue Montreal', sans-serif;
}`}
        </pre>
      </section>

      <footer style={{ marginTop: '3rem', textAlign: 'center', color: '#666', fontSize: '0.875rem' }}>
        <p>All fonts are served with CORS enabled and cached for optimal performance</p>
      </footer>
    </main>
  );
}

