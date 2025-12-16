'use client';

import { useEffect } from 'react';

type AdSenseProps = {
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: string;
  label?: string; // Optional label for debugging or structure
};

export default function AdSense({ slot, style, format = 'auto', responsive = 'true', label }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden', width: '100%' }}>
      {label && <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Advertisement</div>}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-2875879574828967"
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-full-width-responsive={responsive}
      />
    </div>
  );
}
