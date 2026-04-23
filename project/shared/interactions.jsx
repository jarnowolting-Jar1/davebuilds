// Shared interactive primitives: cursor, before/after slider, project hover previews.
// Scoped to a container so each artboard can have its own cursor.

function useScopedCursor(ref, { accent = '#d94f1e', dark = false } = {}) {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [visible, setVisible] = React.useState(false);
  const [label, setLabel] = React.useState(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      const hover = e.target.closest('[data-cursor]');
      setLabel(hover ? hover.getAttribute('data-cursor') : null);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => { setVisible(false); setLabel(null); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);

  return { pos, visible, label, accent, dark };
}

function Cursor({ state }) {
  const { pos, visible, label, accent, dark } = state;
  const size = label ? 72 : 12;
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 9999,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: pos.x, top: pos.y,
        width: size, height: size,
        marginLeft: -size / 2, marginTop: -size / 2,
        borderRadius: '50%',
        background: label ? accent : (dark ? '#fff' : '#111'),
        mixBlendMode: label ? 'normal' : 'difference',
        transition: 'width .22s cubic-bezier(.2,.7,.3,1), height .22s cubic-bezier(.2,.7,.3,1), background .18s',
        opacity: visible ? 1 : 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
        fontSize: 11, fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
        letterSpacing: '0.04em', textTransform: 'uppercase',
        fontWeight: 500,
      }}>
        {label}
      </div>
    </div>
  );
}

// Before/after slider — striped SVG placeholders in two treatments.
function BeforeAfter({ accent = '#d94f1e', height = 420 }) {
  const [x, setX] = React.useState(42);
  const wrapRef = React.useRef(null);
  const drag = React.useRef(false);

  const update = (clientX) => {
    const r = wrapRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setX(pct);
  };
  const onDown = (e) => { drag.current = true; update(e.clientX ?? e.touches?.[0]?.clientX); };
  const onMove = (e) => { if (drag.current) update(e.clientX ?? e.touches?.[0]?.clientX); };
  const onUp = () => { drag.current = false; };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      onMouseDown={onDown}
      onTouchStart={onDown}
      data-cursor="sleep"
      style={{
        position: 'relative',
        width: '100%', height,
        overflow: 'hidden',
        userSelect: 'none', cursor: 'ew-resize',
        background: '#1a1a1a',
        border: '1px solid currentColor',
      }}
    >
      {/* AFTER (full width, underneath) */}
      <FakeShop kind="after" accent={accent} />
      {/* BEFORE (clipped) */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: `polygon(0 0, ${x}% 0, ${x}% 100%, 0 100%)`,
      }}>
        <FakeShop kind="before" accent={accent} />
      </div>
      {/* Handle */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${x}%`, width: 1, background: '#fff', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 44, height: 44, borderRadius: '50%',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'ui-monospace, monospace', fontSize: 10, color: '#111',
          letterSpacing: '0.08em',
          boxShadow: '0 4px 20px rgba(0,0,0,.3)',
        }}>◀ ▶</div>
      </div>
      {/* Labels */}
      <div style={labelStyle('left')}>VOOR</div>
      <div style={labelStyle('right')}>NA</div>
    </div>
  );
}

function labelStyle(side) {
  return {
    position: 'absolute', top: 16,
    [side]: 16,
    padding: '6px 10px',
    background: 'rgba(0,0,0,.7)', color: '#fff',
    fontFamily: 'ui-monospace, monospace', fontSize: 10,
    letterSpacing: '0.15em',
  };
}

// Fake Shopify shop UI at two fidelity levels, striped placeholders for imagery.
function FakeShop({ kind, accent }) {
  const before = kind === 'before';
  return (
    <div style={{
      width: '100%', height: '100%',
      background: before ? '#e8e4dc' : '#0f0f0f',
      color: before ? '#333' : '#f2efe8',
      padding: '16px 22px',
      fontFamily: before ? 'Arial, sans-serif' : 'Helvetica, Arial, sans-serif',
      display: 'flex', flexDirection: 'column', gap: 14,
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, letterSpacing: before ? 0 : '0.3em',
        textTransform: before ? 'none' : 'uppercase',
        paddingBottom: 10,
        borderBottom: `1px solid ${before ? '#bbb' : '#2a2a2a'}`,
      }}>
        <span style={{ fontWeight: before ? 700 : 400, fontSize: before ? 18 : 12 }}>
          {before ? 'SHOPPY STORE' : 'atelier m'}
        </span>
        <span style={{ display: 'flex', gap: before ? 12 : 22 }}>
          <span>{before ? 'Home' : 'Shop'}</span>
          <span>{before ? 'Shop' : 'Journal'}</span>
          <span>{before ? 'About' : 'Contact'}</span>
          <span>{before ? 'Cart (0)' : 'Cart'}</span>
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1 }}>
        <div style={{ background: stripes(before), position: 'relative', minHeight: 0 }}>
          <div style={{
            position: 'absolute', left: 12, bottom: 12,
            fontSize: before ? 22 : 36, fontWeight: before ? 700 : 300,
            lineHeight: 1,
            color: before ? '#fff' : accent,
            textShadow: before ? '2px 2px 0 #000' : 'none',
            letterSpacing: before ? 0 : '-0.02em',
          }}>
            {before ? 'SUMMER SALE!' : 'Seizoen 04'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 10 }}>
          <div style={{ background: stripes(before) }} />
          <div style={{ background: stripes(before) }} />
        </div>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 10, letterSpacing: before ? 0 : '0.2em',
      }}>
        <span>{before ? '🔥 Hot deals →' : 'Nieuw / Kijk verder'}</span>
        <span style={{
          padding: before ? '8px 14px' : '10px 18px',
          background: before ? '#ff3b3b' : accent,
          color: '#fff',
          borderRadius: before ? 20 : 0,
          fontSize: before ? 11 : 10,
          fontWeight: before ? 700 : 500,
        }}>
          {before ? 'BUY NOW!!' : 'Ontdek'}
        </span>
      </div>
    </div>
  );
}

function stripes(before) {
  if (before) {
    return `repeating-linear-gradient(45deg, #c8c2b5 0 6px, #b8b2a5 6px 12px)`;
  }
  return `repeating-linear-gradient(135deg, #1a1a1a 0 2px, #111 2px 18px)`;
}

Object.assign(window, { useScopedCursor, Cursor, BeforeAfter });
