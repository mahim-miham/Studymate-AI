import React from 'react';

const CARDS = [
  { id: 'research', icon: 'ti-search',       color: 'rgba(108,99,255,0.2)',   icolor: '#a78bfa', title: 'Research',     desc: 'Deep summaries, key facts, references on any topic' },
  { id: 'assign',   icon: 'ti-file-text',    color: 'rgba(56,189,248,0.15)',  icolor: '#38bdf8', title: 'Assignment',   desc: 'Full essays, reports, and case studies with structure' },
  { id: 'slides',   icon: 'ti-presentation', color: 'rgba(167,139,250,0.18)', icolor: '#c4b5fd', title: 'Slides',       desc: 'Structured decks with content and speaker notes' },
  { id: 'video',    icon: 'ti-video',        color: 'rgba(251,146,60,0.15)',  icolor: '#fb923c', title: 'Video script', desc: 'Natural scripts ready to record for video assignments' },
  { id: 'notes',    icon: 'ti-notes',        color: 'rgba(52,211,153,0.15)',  icolor: '#34d399', title: 'Study notes',  desc: 'Clean exam-ready notes from any lecture or topic' },
  { id: 'quiz',     icon: 'ti-help-circle',  color: 'rgba(248,113,113,0.15)', icolor: '#f87171', title: 'Quiz',         desc: 'Practice MCQs with full answer explanations' },
];

const CHIPS = [
  { label: 'Research a topic', nav: 'research' },
  { label: 'Write assignment', nav: 'assign' },
  { label: 'Build slides',     nav: 'slides' },
  { label: 'Take a quiz',      nav: 'quiz' },
];

export default function Home({ onNav }) {
  return (
    <>
      <style>{`
        .home-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 16px; cursor: pointer;
          transition: all 0.22s; position: relative; overflow: hidden;
        }
        .home-card:hover {
          border-color: rgba(108,99,255,0.45); transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(108,99,255,0.2);
          background: rgba(108,99,255,0.07);
        }
        .home-chip {
          font-size: 11px; padding: 5px 13px; border-radius: 20px; cursor: pointer; font-weight: 600;
          border: 1px solid rgba(108,99,255,0.3); color: #a78bfa; background: rgba(108,99,255,0.1);
          transition: all 0.15s; font-family: 'Inter', sans-serif;
        }
        .home-chip:hover { background: rgba(108,99,255,0.25); border-color: rgba(108,99,255,0.65); transform: translateY(-1px); }
      `}</style>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Welcome */}
        <div>
          <div style={{
            fontSize: 26, fontWeight: 800, letterSpacing: '-0.05em', marginBottom: 4,
            background: 'linear-gradient(130deg, #fff, rgba(167,139,250,0.8))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Welcome back
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', marginBottom: 16 }}>
            Your AI-powered student companion. 6 tools to crush any assignment.
          </p>

          {/* Quick chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
            {CHIPS.map(c => (
              <button key={c.nav} className="home-chip" onClick={() => onNav(c.nav)}>{c.label}</button>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {[['6', 'AI tools'], ['∞', 'Topics'], ['24/7', 'Available'], ['Free', 'Always']].map(([n, l]) => (
              <div key={l} style={{
                flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 11, padding: '11px', textAlign: 'center',
              }}>
                <div style={{
                  fontSize: 20, fontWeight: 800,
                  background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{n}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: 10 }}>
          {CARDS.map(card => (
            <div key={card.id} className="home-card" onClick={() => onNav(card.id)}>
              <div style={{
                width: 38, height: 38, borderRadius: 11, display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: 10, background: card.color, fontSize: 18,
              }}>
                <i className={`ti ${card.icon}`} style={{ color: card.icolor }} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{card.title}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.33)', lineHeight: 1.55 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
