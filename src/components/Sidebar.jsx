import React from 'react';

const NAV_ITEMS = [
  { id: 'home',     icon: 'ti-home',         label: 'Home' },
  { id: 'research', icon: 'ti-search',        label: 'Research' },
  { id: 'assign',   icon: 'ti-file-text',     label: 'Assignment' },
  { id: 'slides',   icon: 'ti-presentation',  label: 'Slides' },
  { id: 'video',    icon: 'ti-video',         label: 'Video script' },
  { id: 'notes',    icon: 'ti-notes',         label: 'Study notes' },
  { id: 'quiz',     icon: 'ti-help-circle',   label: 'Quiz' },
];

export default function Sidebar({ active, onNav }) {
  return (
    <>
      <style>{`
        .nav-btn {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 11px; border: none; background: transparent;
          color: rgba(255,255,255,0.42); font-size: 12.5px; font-weight: 500;
          border-radius: 9px; cursor: pointer; text-align: left;
          transition: all 0.18s; font-family: 'Inter', sans-serif;
          position: relative; overflow: hidden;
        }
        .nav-btn:hover { background: rgba(108,99,255,0.12); color: rgba(255,255,255,0.88); }
        .nav-btn.active { background: rgba(108,99,255,0.2); color: #fff; box-shadow: inset 0 0 0 1px rgba(108,99,255,0.38); }
        .nav-btn.active i { color: #c4b5fd !important; }
        .nav-btn::before {
          content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
          width: 2px; height: 0; background: linear-gradient(to bottom, #6c63ff, #a78bfa);
          border-radius: 2px; transition: height 0.18s;
        }
        .nav-btn.active::before { height: 55%; }
      `}</style>

      <nav style={{
        width: 210, background: 'rgba(7,7,15,0.75)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 2,
        backdropFilter: 'blur(12px)', overflowY: 'auto', flexShrink: 0,
      }}>
        <div style={{
          fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '12px 10px 6px', fontWeight: 700,
        }}>
          Tools
        </div>

        {NAV_ITEMS.map(({ id, icon, label }) => (
          <button
            key={id}
            className={`nav-btn ${active === id ? 'active' : ''}`}
            onClick={() => onNav(id)}
          >
            <i className={`ti ${icon}`} style={{ fontSize: 16, flexShrink: 0 }} />
            {label}
          </button>
        ))}
      </nav>
    </>
  );
}
