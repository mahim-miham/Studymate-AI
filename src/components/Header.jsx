import React from 'react';

// ── 3D spinning cube logo ──
function Cube() {
  return (
    <>
      <style>{`
        @keyframes cubespin { to { transform: rotateX(22deg) rotateY(360deg); } }
        .cube-scene { width: 40px; height: 40px; perspective: 200px; flex-shrink: 0; }
        .cube-inner { width: 40px; height: 40px; position: relative; transform-style: preserve-3d; animation: cubespin 10s linear infinite; }
        .cface { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(108,99,255,0.5); display: flex; align-items: center; justify-content: center; }
        .cf1 { background: rgba(108,99,255,0.26); transform: translateZ(20px); }
        .cf2 { background: rgba(108,99,255,0.08); transform: rotateY(180deg) translateZ(20px); }
        .cf3 { background: rgba(56,189,248,0.08); transform: rotateY(-90deg) translateZ(20px); }
        .cf4 { background: rgba(56,189,248,0.08); transform: rotateY(90deg) translateZ(20px); }
        .cf5 { background: rgba(167,139,250,0.08); transform: rotateX(90deg) translateZ(20px); }
        .cf6 { background: rgba(167,139,250,0.08); transform: rotateX(-90deg) translateZ(20px); }
      `}</style>
      <div className="cube-scene">
        <div className="cube-inner">
          <div className="cface cf1">
            <i className="ti ti-brain" style={{ fontSize: 15, color: '#c4b5fd' }} />
          </div>
          <div className="cface cf2" />
          <div className="cface cf3" />
          <div className="cface cf4" />
          <div className="cface cf5" />
          <div className="cface cf6" />
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <header style={{
      position: 'relative', zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 24px',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: 'rgba(7,7,15,0.85)',
      backdropFilter: 'blur(20px)',
    }}>
      {/* Left — Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
        <Cube />
        <div>
          <div style={{
            fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em',
            background: 'linear-gradient(130deg, #c4b5fd, #38bdf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            StudyMate AI
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>
            All-in-one student companion
          </div>
        </div>
      </div>

      {/* Right — Badge */}
      <span style={{
        fontSize: 10, padding: '4px 12px', borderRadius: 20,
        border: '1px solid rgba(108,99,255,0.4)',
        background: 'rgba(108,99,255,0.14)', color: '#c4b5fd', fontWeight: 600,
      }}>
        Powered by Claude
      </span>
    </header>
  );
}
