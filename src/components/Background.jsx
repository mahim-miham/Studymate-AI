import React from 'react';

// Floating glowing orbs + subtle grid — purely decorative
export default function Background() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Orbs */}
      <style>{`
        @keyframes drift {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50%       { transform: scale(1.1) translate(20px, -18px); }
        }
        .orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.15; animation: drift 14s ease-in-out infinite; }
        .orb1 { width: 520px; height: 520px; background: #6c63ff; top: -170px; left: -130px; animation-delay: 0s; }
        .orb2 { width: 400px; height: 400px; background: #38bdf8; top: 42%; right: -110px; animation-delay: -5s; }
        .orb3 { width: 320px; height: 320px; background: #a78bfa; bottom: -70px; left: 38%; animation-delay: -10s; }
      `}</style>
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
    </div>
  );
}
