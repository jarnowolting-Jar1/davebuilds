// Direction A — Swiss / light / grid-heavy / off-white + accent orange
// Full homepage as a single long artboard.

function DirectionA({ accent, fontDisplay, fontMono }) {
  const ref = React.useRef(null);
  const cursor = useScopedCursor(ref, { accent });
  const D = window.DB_DATA;

  const bg = '#f5f2ec';
  const fg = '#111';
  const muted = '#6b6357';
  const rule = '#d9d3c6';

  const font = {
    display: fontDisplay,
    mono: fontMono,
  };

  const grid12 = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: 24,
  };

  const section = (pad = 120) => ({
    padding: `${pad}px 48px`,
    borderTop: `1px solid ${rule}`,
  });

  const kicker = {
    fontFamily: font.mono,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: muted,
  };

  return (
    <div ref={ref} data-dir="A" style={{
      position: 'relative',
      width: 1440, minHeight: 5400,
      background: bg, color: fg,
      fontFamily: font.display,
      overflow: 'hidden',
    }}>
      <Cursor state={cursor} />

      {/* NAV */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '22px 48px',
        background: bg,
        borderBottom: `1px solid ${rule}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <div style={{ width: 10, height: 10, background: accent }} />
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}>Davebuilds</span>
          <span style={{ ...kicker, marginLeft: 6 }}>Shopify studio · AMS</span>
        </div>
        <div style={{ display: 'flex', gap: 28, ...kicker, fontSize: 12 }}>
          <a data-cursor="scroll" style={linkStyle(fg)}>Werk</a>
          <a data-cursor="scroll" style={linkStyle(fg)}>Diensten</a>
          <a data-cursor="scroll" style={linkStyle(fg)}>Proces</a>
          <a data-cursor="scroll" style={linkStyle(fg)}>Pakketten</a>
          <a data-cursor="scroll" style={linkStyle(fg)}>FAQ</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ ...kicker, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d9d4a', boxShadow: '0 0 0 3px rgba(45,157,74,.2)' }} />
            2 plekken open · mei
          </span>
          <button data-cursor="plan" style={btnSolid(accent)}>Plan gesprek →</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '72px 48px 56px' }}>
        <div style={{ ...grid12, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / 3', ...kicker }}>
            <div>N° 001 / Studio</div>
            <div style={{ marginTop: 6 }}>2019 — {new Date().getFullYear()}</div>
          </div>
          <h1 style={{
            gridColumn: '3 / 13',
            margin: 0,
            fontSize: 124,
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            fontWeight: 500,
          }}>
            Shopify-webshops<br />
            die <em style={{ fontStyle: 'italic', color: accent, fontFamily: `${font.display}`, fontWeight: 400 }}>verkopen</em>,<br />
            niet alleen <span style={{ textDecoration: `underline 2px ${accent}`, textUnderlineOffset: 14 }}>mooi</span> zijn.
          </h1>
        </div>

        <div style={{ ...grid12, marginTop: 72, alignItems: 'end' }}>
          <div style={{ gridColumn: '3 / 7', fontSize: 18, lineHeight: 1.45, color: '#2a2620' }}>
            {D.description}
          </div>
          <div style={{ gridColumn: '8 / 11' }}>
            <button data-cursor="start" style={{
              ...btnSolid(accent),
              fontSize: 14,
              padding: '16px 24px',
              width: '100%',
            }}>
              Start een project →
            </button>
            <div style={{ ...kicker, marginTop: 10 }}>Gem. reactie binnen 4u</div>
          </div>
          <div style={{ gridColumn: '11 / 13', textAlign: 'right', ...kicker }}>
            ↓ Scroll<br />0 / 09
          </div>
        </div>
      </div>

      {/* HERO VISUAL — big Swiss spec frame */}
      <div style={{ padding: '0 48px 96px' }}>
        <div style={{
          position: 'relative',
          aspectRatio: '16 / 7',
          background: stripes2(),
          border: `1px solid ${rule}`,
          overflow: 'hidden',
        }}>
          <SpecCorner tl="A01" tr="1440×630" bl={font.mono} br="HERO / VISUAL" mono={font.mono} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: font.mono, fontSize: 13, color: '#6b6357',
          }}>
            [ PRODUCT / CAMPAIGN SHOT — 16:7 ]
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            display: 'flex', justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'linear-gradient(to top, rgba(245,242,236,.9), transparent)',
            fontFamily: font.mono, fontSize: 11, letterSpacing: '0.12em',
          }}>
            <span>ATELIER M — SS25</span>
            <span>FG 01 · BG 02 · GRID 12</span>
            <span>© 2026 DAVEBUILDS</span>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div style={{
        ...section(64),
        borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        }}>
          {D.stats.map((s, i) => (
            <div key={i} style={{
              padding: '8px 28px 0 0',
              borderLeft: i === 0 ? 'none' : `1px solid ${rule}`,
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <div style={{ ...kicker }}>N° {String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontSize: 64, letterSpacing: '-0.03em', fontWeight: 500,
                marginTop: 18, marginBottom: 10, lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: muted, lineHeight: 1.4, maxWidth: 220 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WORK — featured projects */}
      <div style={section(120)}>
        <SectionHead kicker="§ 02 — Geselecteerd werk" title="Recente Shopify builds." mono={font.mono} grid12={grid12} />

        <div style={{ marginTop: 64 }}>
          {D.projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} accent={accent} fg={fg} muted={muted} rule={rule} mono={font.mono} />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'right' }}>
          <a data-cursor="alle" style={{ ...kicker, fontSize: 13, color: fg, borderBottom: `1px solid ${fg}`, paddingBottom: 2 }}>
            Alle 40+ projecten →
          </a>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div style={section(120)}>
        <SectionHead kicker="§ 03 — Voor & na" title="Van template naar thuis." mono={font.mono} grid12={grid12} />
        <div style={{ marginTop: 48, ...grid12 }}>
          <div style={{ gridColumn: '1 / 9' }}>
            <BeforeAfter accent={accent} height={520} />
          </div>
          <div style={{ gridColumn: '10 / 13', fontSize: 14, lineHeight: 1.55, color: muted }}>
            <div style={{ ...kicker, marginBottom: 16, color: fg }}>Atelier M — Q1 2025</div>
            <p style={{ margin: '0 0 16px' }}>
              Kant-en-klaar Dawn-thema met stockfoto's en een generieke funnel. Conversie hing rond de 0.8%.
            </p>
            <p style={{ margin: 0 }}>
              Na herontwerp: 1.5%, hogere AOV en een merk dat z'n eigen gezicht heeft. Zelfde producten, ander verhaal.
            </p>
            <div style={{ marginTop: 24, padding: 16, background: '#fff', border: `1px solid ${rule}` }}>
              <div style={{ ...kicker, marginBottom: 6, color: fg }}>Resultaat</div>
              <div style={{ fontSize: 44, letterSpacing: '-0.02em', fontWeight: 500, color: accent, lineHeight: 1 }}>+82%</div>
              <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>conversie na 6 weken</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={section(120)}>
        <SectionHead kicker="§ 04 — Diensten" title="Alles onder één dak." mono={font.mono} grid12={grid12} />
        <div style={{
          marginTop: 56,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: `1px solid ${rule}`,
        }}>
          {D.services.map((s, i) => (
            <div key={s.n} data-cursor={s.t.toLowerCase()} style={{
              padding: '32px 28px 40px 0',
              borderBottom: `1px solid ${rule}`,
              borderRight: (i + 1) % 3 === 0 ? 'none' : `1px solid ${rule}`,
              paddingLeft: (i % 3 === 0) ? 0 : 28,
              cursor: 'pointer',
            }}>
              <div style={{ ...kicker, color: accent }}>{s.n}</div>
              <h3 style={{ fontSize: 28, letterSpacing: '-0.02em', fontWeight: 500, margin: '14px 0 12px' }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.5, margin: 0 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div style={section(120)}>
        <SectionHead kicker="§ 05 — Proces" title="Vier weken. Vier fases." mono={font.mono} grid12={grid12} />
        <div style={{ marginTop: 56, ...grid12 }}>
          {D.process.map((p, i) => (
            <div key={p.n} style={{
              gridColumn: `${1 + i * 3} / ${4 + i * 3}`,
              borderTop: `2px solid ${fg}`,
              paddingTop: 20, paddingRight: 24,
              position: 'relative',
            }}>
              <div style={{ ...kicker, color: muted }}>FASE {p.n}</div>
              <div style={{
                fontSize: 60, fontFamily: font.mono, fontWeight: 400,
                lineHeight: 1, margin: '20px 0 18px',
                color: accent,
              }}>{p.n}</div>
              <h4 style={{ fontSize: 20, fontWeight: 500, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{p.t}</h4>
              <p style={{ fontSize: 13, color: muted, lineHeight: 1.5, margin: 0 }}>{p.d}</p>
              <div style={{
                position: 'absolute', top: -8, right: 16,
                ...kicker, fontSize: 10, color: muted,
              }}>W{i + 1}-{i + 2}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT + TESTIMONIALS */}
      <div style={section(120)}>
        <div style={{ ...grid12, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / 6' }}>
            <div style={{ ...kicker }}>§ 06 — Over</div>
            <h2 style={{
              fontSize: 72, letterSpacing: '-0.035em', fontWeight: 500,
              lineHeight: 1, margin: '24px 0 28px',
            }}>
              Dag. Ik ben <em style={{ fontStyle: 'italic', color: accent }}>Dave</em>.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: '#2a2620', margin: '0 0 16px', maxWidth: 460 }}>
              {D.about.bio}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: muted, margin: 0, maxWidth: 460 }}>
              Geen agency met strakke lagen, sales decks en accountmanagers. Gewoon één lijn, één gezicht, één visie.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 36, ...kicker, color: fg }}>
              <div><div style={{ color: muted }}>Locatie</div>{D.about.based}</div>
              <div><div style={{ color: muted }}>Actief</div>{D.about.since}</div>
              <div><div style={{ color: muted }}>Rol</div>{D.about.role}</div>
            </div>
          </div>

          <div style={{ gridColumn: '7 / 13' }}>
            <div style={{
              aspectRatio: '4/5', background: stripes2(),
              border: `1px solid ${rule}`, position: 'relative',
            }}>
              <SpecCorner tl="P01" tr="Portret" bl="4:5" br="DAVE / 2026" mono={font.mono} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: font.mono, fontSize: 13, color: '#6b6357',
              }}>
                [ PORTRET — DAVE ]
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{
          marginTop: 96,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          borderTop: `1px solid ${rule}`,
        }}>
          {D.testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '40px 28px 0 0',
              borderLeft: i === 0 ? 'none' : `1px solid ${rule}`,
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <div style={{ fontSize: 40, color: accent, lineHeight: 0.5, marginBottom: 8 }}>“</div>
              <p style={{ fontSize: 18, lineHeight: 1.4, letterSpacing: '-0.01em', margin: 0 }}>
                {t.q}
              </p>
              <div style={{ ...kicker, marginTop: 24 }}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PACKAGES */}
      <div style={section(120)}>
        <SectionHead kicker="§ 07 — Pakketten" title="Transparant. Geen uurtje-factuurtje." mono={font.mono} grid12={grid12} />

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${rule}` }}>
          {D.packages.map((p, i) => (
            <div key={p.name} style={{
              padding: 32,
              background: p.featured ? fg : bg,
              color: p.featured ? bg : fg,
              borderRight: i < 2 ? `1px solid ${p.featured ? '#2a2620' : rule}` : 'none',
              position: 'relative',
            }}>
              {p.featured && (
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  ...kicker, color: accent, fontSize: 10,
                }}>★ Meest gekozen</div>
              )}
              <div style={{ ...kicker, color: p.featured ? '#999' : muted }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                <div style={{ fontSize: 56, letterSpacing: '-0.03em', fontWeight: 500, lineHeight: 1 }}>{p.price}</div>
              </div>
              <div style={{ ...kicker, color: p.featured ? '#999' : muted, marginTop: 6 }}>{p.unit}</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: '20px 0 24px', color: p.featured ? '#c9c2b5' : '#2a2620' }}>
                {p.for}
              </p>
              <div style={{ height: 1, background: p.featured ? '#2a2620' : rule, margin: '4px 0 20px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.includes.map((x, j) => (
                  <li key={j} style={{ fontSize: 13, lineHeight: 1.45, display: 'flex', gap: 10 }}>
                    <span style={{ color: accent, fontFamily: font.mono }}>+</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <button data-cursor="kies" style={{
                marginTop: 32, width: '100%',
                padding: '14px 0',
                background: p.featured ? accent : 'transparent',
                color: p.featured ? '#fff' : fg,
                border: `1px solid ${p.featured ? accent : fg}`,
                fontFamily: font.mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                cursor: 'pointer',
              }}>
                Kies {p.name} →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={section(120)}>
        <div style={grid12}>
          <div style={{ gridColumn: '1 / 5' }}>
            <div style={{ ...kicker }}>§ 08 — FAQ</div>
            <h2 style={{ fontSize: 56, letterSpacing: '-0.035em', fontWeight: 500, margin: '24px 0 0', lineHeight: 1 }}>
              Veel<br />gestelde<br />vragen.
            </h2>
          </div>
          <div style={{ gridColumn: '6 / 13' }}>
            {D.faq.map((f, i) => <FaqRow key={i} f={f} n={i} mono={font.mono} rule={rule} accent={accent} muted={muted} />)}
          </div>
        </div>
      </div>

      {/* CONTACT / CTA */}
      <div style={{ background: fg, color: bg, padding: '120px 48px' }}>
        <div style={grid12}>
          <div style={{ gridColumn: '1 / 13' }}>
            <div style={{ ...kicker, color: '#888' }}>§ 09 — Contact</div>
            <h2 style={{
              margin: '32px 0 0',
              fontSize: 180, lineHeight: 0.9, letterSpacing: '-0.05em',
              fontWeight: 500,
            }}>
              Laten we<br />
              <em style={{ fontStyle: 'italic', color: accent }}>iets moois</em><br />
              bouwen.
            </h2>
          </div>
        </div>

        <div style={{ ...grid12, marginTop: 96, borderTop: `1px solid #2a2620`, paddingTop: 40 }}>
          <div style={{ gridColumn: '1 / 4' }}>
            <div style={{ ...kicker, color: '#888' }}>E-mail</div>
            <a data-cursor="mail" style={{ fontSize: 22, color: bg, letterSpacing: '-0.01em' }}>dave@davebuilds.nl</a>
          </div>
          <div style={{ gridColumn: '5 / 8' }}>
            <div style={{ ...kicker, color: '#888' }}>Bellen</div>
            <div style={{ fontSize: 22, letterSpacing: '-0.01em' }}>+31 (0)6 34 21 09 88</div>
          </div>
          <div style={{ gridColumn: '9 / 13' }}>
            <div style={{ ...kicker, color: '#888' }}>Of direct inplannen</div>
            <button data-cursor="plan" style={{
              ...btnSolid(accent),
              marginTop: 10, fontSize: 14, padding: '14px 20px',
            }}>
              Plan 20min gratis gesprek →
            </button>
          </div>
        </div>

        <div style={{
          ...grid12, marginTop: 120, paddingTop: 24,
          borderTop: '1px solid #2a2620',
          ...kicker, color: '#888',
        }}>
          <div style={{ gridColumn: '1 / 4' }}>© 2026 Davebuilds</div>
          <div style={{ gridColumn: '5 / 8' }}>KVK 7612 4498 · BTW NL004.21.833.B01</div>
          <div style={{ gridColumn: '9 / 13', textAlign: 'right' }}>Gemaakt in Amsterdam — 52.37°N / 4.89°E</div>
        </div>
      </div>
    </div>
  );
}

function SectionHead({ kicker, title, mono, grid12 }) {
  return (
    <div style={grid12}>
      <div style={{ gridColumn: '1 / 5', fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6357' }}>
        {kicker}
      </div>
      <h2 style={{
        gridColumn: '5 / 13',
        margin: 0,
        fontSize: 72, letterSpacing: '-0.035em', fontWeight: 500, lineHeight: 1,
      }}>{title}</h2>
    </div>
  );
}

function ProjectRow({ project: p, index, accent, fg, muted, rule, mono }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-cursor="bekijk"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '80px 1fr 200px 180px 120px',
        alignItems: 'center',
        padding: '28px 0',
        borderTop: `1px solid ${rule}`,
        cursor: 'pointer',
        transition: 'padding .3s, background .3s',
        paddingLeft: hover ? 32 : 0,
        background: hover ? '#efeae0' : 'transparent',
      }}
    >
      <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.12em', color: muted }}>
        {String(index + 1).padStart(3, '0')}
      </div>
      <div style={{
        fontSize: 40, letterSpacing: '-0.025em', fontWeight: 500,
        color: hover ? accent : fg,
        transition: 'color .2s',
      }}>
        {p.name}
      </div>
      <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: muted, textTransform: 'uppercase' }}>
        {p.sector}
      </div>
      <div style={{ fontFamily: mono, fontSize: 12, color: muted }}>{p.result}</div>
      <div style={{ fontFamily: mono, fontSize: 12, color: muted, textAlign: 'right' }}>{p.year} →</div>

      {/* Hover preview */}
      <div style={{
        position: 'absolute',
        right: 200, top: '50%',
        transform: `translate(0, -50%) scale(${hover ? 1 : 0.92})`,
        width: 280, height: 200,
        opacity: hover ? 1 : 0,
        transition: 'opacity .2s, transform .2s',
        pointerEvents: 'none',
        background: stripes2(),
        border: `1px solid ${rule}`,
        boxShadow: '0 20px 40px rgba(0,0,0,.12)',
        zIndex: 5,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: mono, fontSize: 11, color: muted, letterSpacing: '0.15em',
        }}>
          {p.name.toUpperCase()} — PREVIEW
        </div>
      </div>
    </div>
  );
}

function FaqRow({ f, n, mono, rule, accent, muted }) {
  const [open, setOpen] = React.useState(n === 0);
  return (
    <div style={{ borderTop: n === 0 ? `1px solid ${rule}` : 'none', borderBottom: `1px solid ${rule}` }}>
      <button
        data-cursor={open ? 'sluit' : 'open'}
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', padding: '24px 0', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left',
          color: 'inherit', fontFamily: 'inherit',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.12em', color: muted }}>
            {String(n + 1).padStart(2, '0')}
          </span>
          <span style={{ fontSize: 22, letterSpacing: '-0.015em', fontWeight: 500 }}>{f.q}</span>
        </div>
        <span style={{ fontFamily: mono, fontSize: 18, color: accent }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24, paddingLeft: 52, fontSize: 15, lineHeight: 1.55, color: muted, maxWidth: 640 }}>
          {f.a}
        </div>
      )}
    </div>
  );
}

function SpecCorner({ tl, tr, bl, br, mono }) {
  const style = {
    position: 'absolute',
    padding: 10,
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: '0.12em',
    color: '#6b6357',
    textTransform: 'uppercase',
  };
  return (
    <>
      <div style={{ ...style, top: 0, left: 0 }}>{tl}</div>
      <div style={{ ...style, top: 0, right: 0 }}>{tr}</div>
      <div style={{ ...style, bottom: 0, left: 0 }}>{bl}</div>
      <div style={{ ...style, bottom: 0, right: 0 }}>{br}</div>
    </>
  );
}

function btnSolid(accent) {
  return {
    background: accent, color: '#fff', border: 'none',
    padding: '12px 18px',
    fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
    fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
    cursor: 'pointer',
  };
}

function linkStyle(fg) {
  return { color: fg, textDecoration: 'none', cursor: 'pointer' };
}

function stripes2() {
  return `repeating-linear-gradient(135deg, #e5e0d4 0 1px, #efeae0 1px 14px)`;
}

Object.assign(window, { DirectionA });
