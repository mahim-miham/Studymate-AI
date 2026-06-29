import React, { useState } from 'react';

// ── Glowing glass card ──
export function GlassCard({ children, style }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 16,
      padding: '16px 18px',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* Top highlight line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.45), transparent)',
      }} />
      {children}
    </div>
  );
}

// ── Field label ──
export function Label({ children }) {
  return (
    <div style={{
      fontSize: 10, color: 'rgba(255,255,255,0.38)', fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6,
    }}>
      {children}
    </div>
  );
}

// ── Text input ──
export function Input({ id, placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: '100%', background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9,
        padding: '9px 13px', fontSize: 13, color: '#fff',
        fontFamily: 'Inter, sans-serif', outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onFocus={e => {
        e.target.style.borderColor = 'rgba(108,99,255,0.65)';
        e.target.style.boxShadow = '0 0 0 4px rgba(108,99,255,0.1)';
      }}
      onBlur={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}

// ── Textarea ──
export function Textarea({ id, placeholder, value, onChange, rows = 4 }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      style={{
        width: '100%', background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9,
        padding: '9px 13px', fontSize: 13, color: '#fff',
        fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'vertical',
        lineHeight: 1.65, transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onFocus={e => {
        e.target.style.borderColor = 'rgba(108,99,255,0.65)';
        e.target.style.boxShadow = '0 0 0 4px rgba(108,99,255,0.1)';
      }}
      onBlur={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}

// ── Select dropdown ──
export function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: '100%', background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9,
        padding: '9px 13px', fontSize: 13, color: '#fff',
        fontFamily: 'Inter, sans-serif', outline: 'none',
        cursor: 'pointer', transition: 'border-color 0.2s',
      }}
      onFocus={e => { e.target.style.borderColor = 'rgba(108,99,255,0.65)'; }}
      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
    >
      {options.map(opt => (
        <option key={opt} value={opt} style={{ background: '#0f0f1e' }}>{opt}</option>
      ))}
    </select>
  );
}

// ── Two-column row ──
export function Row({ children }) {
  return (
    <div style={{ display: 'flex', gap: 11, marginTop: 11 }}>
      {React.Children.map(children, child => (
        <div style={{ flex: 1 }}>{child}</div>
      ))}
    </div>
  );
}

// ── Generate button ──
export function GenButton({ onClick, disabled, icon, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%', padding: 12, border: 'none', borderRadius: 11,
        fontSize: 13.5, fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'Inter, sans-serif',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
        background: disabled
          ? 'rgba(108,99,255,0.3)'
          : 'linear-gradient(135deg, #6c63ff, #a78bfa)',
        color: '#fff', letterSpacing: '-0.01em',
        boxShadow: disabled ? 'none' : '0 4px 24px rgba(108,99,255,0.4), 0 1px 0 rgba(255,255,255,0.15) inset',
        transition: 'all 0.2s', opacity: disabled ? 0.45 : 1,
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,99,255,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = disabled ? 'none' : '0 4px 24px rgba(108,99,255,0.4), 0 1px 0 rgba(255,255,255,0.15) inset'; }}
    >
      {icon && <i className={`ti ${icon}`} style={{ fontSize: 15 }} />}
      {children}
    </button>
  );
}

// ── Loading spinner ──
export function Spinner({ visible, text = 'Generating...' }) {
  if (!visible) return null;
  return (
    <>
      <style>{`@keyframes spinspin { to { transform: rotate(360deg); } }`}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, color: 'rgba(255,255,255,0.4)', padding: '4px 0' }}>
        <i className="ti ti-loader" style={{ display: 'inline-block', animation: 'spinspin 0.7s linear infinite', fontSize: 16 }} />
        {text}
      </div>
    </>
  );
}

// ── Output box ──
export function Output({ text }) {
  const [copied, setCopied] = useState(false);
  if (!text) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          Result
        </span>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex', alignItems: 'center', gap: 5, fontSize: 11,
            color: '#c4b5fd', background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.3)', borderRadius: 7,
            padding: '4px 11px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, transition: 'all 0.15s',
          }}
        >
          <i className={`ti ${copied ? 'ti-check' : 'ti-copy'}`} style={{ fontSize: 13 }} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 11, padding: '14px 16px', fontSize: 13, lineHeight: 1.8,
        color: 'rgba(255,255,255,0.78)', whiteSpace: 'pre-wrap',
        maxHeight: 400, overflowY: 'auto',
      }}>
        {text}
      </div>
    </div>
  );
}

// ── Slide output (special format) ──
export function SlideOutput({ text }) {
  const [copied, setCopied] = useState(false);
  if (!text) return null;

  const slides = text.split('---').filter(s => s.trim());

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          {slides.length} slides generated
        </span>
        <button
          onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
          style={{
            display: 'flex', alignItems: 'center', gap: 5, fontSize: 11,
            color: '#c4b5fd', background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.3)', borderRadius: 7,
            padding: '4px 11px', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500,
          }}
        >
          <i className={`ti ${copied ? 'ti-check' : 'ti-copy'}`} style={{ fontSize: 13 }} />
          {copied ? 'Copied!' : 'Copy all'}
        </button>
      </div>
      {slides.map((slide, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(108,99,255,0.18)',
          borderLeft: '3px solid #6c63ff', borderRadius: 11,
          padding: '13px 15px', marginBottom: 9,
          fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, whiteSpace: 'pre-wrap',
        }}>
          <span style={{
            display: 'inline-block', fontSize: 9, fontWeight: 800, color: '#6c63ff',
            background: 'rgba(108,99,255,0.16)', borderRadius: 5,
            padding: '2px 8px', marginBottom: 7,
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Slide {i + 1}
          </span>
          <br />
          {slide.trim()}
        </div>
      ))}
    </div>
  );
}

// ── Tool page wrapper ──
export function ToolPage({ children }) {
  return (
    <div style={{
      flex: 1, overflowY: 'auto', padding: '18px 24px',
      display: 'flex', flexDirection: 'column', gap: 13,
    }}>
      {children}
    </div>
  );
}

// ── Tool header ──
export function ToolHeader({ eyebrow, title, desc }) {
  return (
    <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ fontSize: 9, color: '#6c63ff', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5 }}>
        {eyebrow}
      </div>
      <div style={{
        fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em',
        background: 'linear-gradient(135deg, #fff 35%, rgba(255,255,255,0.5))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
        {desc}
      </div>
    </div>
  );
}
