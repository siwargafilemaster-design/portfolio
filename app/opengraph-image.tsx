import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Edi Susilo — Junior Full-Stack Developer'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0C1322',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 6, color: '#CBA05A' }}>
          JUNIOR FULL-STACK DEVELOPER
        </div>
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, marginTop: 18 }}>
          Edi Susilo
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#C3CDDF', marginTop: 24, maxWidth: 940 }}>
          Self-taught developer who ships — real apps used by real communities in Central Java.
        </div>
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 3, color: '#5B7FCB', marginTop: 44 }}>
          ● Open to remote opportunities · Worldwide
        </div>
      </div>
    ),
    { ...size }
  )
}