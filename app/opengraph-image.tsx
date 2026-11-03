import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { MARK_PATH, MARK_VIEWBOX } from '@/components/Logo';

export const alt = 'AIx2: See the company as built, not as drawn.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  let fonts: { name: string; data: Buffer; weight: 500; style: 'normal' }[] = [];
  try {
    const data = await readFile(join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf'));
    fonts = [{ name: 'Geist', data, weight: 500, style: 'normal' }];
  } catch {
    fonts = [];
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0E0C09',
          backgroundImage: 'radial-gradient(circle at 80% 55%, rgba(201,163,91,0.12) 0%, rgba(201,163,91,0) 55%)',
          fontFamily: fonts.length ? 'Geist' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="70" height="61" viewBox={MARK_VIEWBOX} style={{ marginRight: 22 }}>
            <path d={MARK_PATH} fill="#C9A35B" fillRule="evenodd" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 600, color: '#F2EBDD' }}>AIx2</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: -2,
              fontWeight: 600,
            }}
          >
            <div style={{ color: '#F2EBDD' }}>See the company as built,</div>
            <div style={{ color: '#B8AD98' }}>not as drawn.</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: '#B8AD98' }}>
            Due diligence and transformation, from a company’s own data
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
