// Direction B — Swiss / dark / monochrome with acid-orange accent
// Same content, different visual language: big mono numerals, inverted,
// asymmetric grid, ticker marquees, more technical.

function DirectionB({ accent, fontDisplay, fontMono }) {
  const ref = React.useRef(null);
  const cursor = useScopedCursor(ref, { accent, dark: true });
  const D = window.DB_DATA;

  const bg = '#0e0e0c';
  const surface = '#16161310';
  const fg = '#f2efe8';
  const muted = '#888277';
  const rule = '#26241f';

  const font = { display: fontDisplay, mono: fontMono };

  const kicker = {
    fontFamily: font.mono,
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: muted,
  };

  return (
    <div ref={ref} data-dir="B" style={{
      position: 'relative',
      width: 1440, minHeight: 5400,
      background: bg, color: fg,
      fontFamily: font.display,
      overflow: 'hidden',
    }}>
      <Cursor state={cursor} />

      {/* Measurement grid background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${rule} 1px, transparent 1px), linear-gradient(90deg, ${rule} 1px, transparent 1px)`,
        backgroundSize: '120px 120px',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* NAV */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 40,
        padding: '18px 40px',
        background: `${bg}dd`, backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${rule}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" style={{ display: 'block' }}>
            <rect x="0" y="0" width="28" height="28" fill={accent} />
            <rect x="4" y="4" width="20" height="20" fill={bg} />
            <rect x="8" y="8" width="12" height="12" fill={accent} />
          </svg>
          <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em' }}>Davebuilds™</span>
        </div>
        <div style={{ display: 'flex', gap: 8, ...kicker, fontSize: 11 }}>
          {['Index', 'Werk', 'Diensten', 'Proces', 'Pakketten', 'FAQ'].map((l, i) => (
            <a key={l} data-cursor={l.toLowerCase()} style={{
              color: fg, padding: '8px 12px',
              border: `1px solid ${rule}`,
              cursor: 'pointer',
            }}>
              [{String(i).padStart(2, '0')}] {l}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button data-cursor="gesprek" style={{
            background: accent, color: bg, border: 'none',
            padding: '10px 18px', fontFamily: font.mono, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
          }}>
            → Plan gesprek
          </button>
        </div>
      </div>

      {/* Ticker */}
      <div style={{
        display: 'flex', gap: 32, padding: '10px 0',
        fontFamily: font.mono, fontSize: 11, color: accent,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        borderBottom: `1px solid ${rule}`,
        whiteSpace: 'nowrap', overflow: 'hidden',
      }}>
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} style={{ display: 'flex', gap: 32, animation: 'db-ticker 40s linear infinite' }}>
            {['● Open voor nieuwe projecten — Mei/Juni 2026', '✱ Laatste 2 plekken Q2', '◆ Amsterdam · Remote wereldwijd', '■ 40+ merken gelanceerd sinds 2019', '▲ Gem. ROAS 3.2x', '● Shopify Plus certified', '✱ Klaviyo partner'].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        ))}
        <style>{`@keyframes db-ticker{from{transform:translateX(0)}to{transform:translateX(-100%)}}`}</style>
      </div>

      {/* HERO */}
      <div style={{ position: 'relative', padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 60px', gap: 0 }}>
          <div>
            <div style={{ ...kicker, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              N° 001 — Studio / 2026
            </div>
          </div>

          <div>
            <div style={{ ...kicker, marginBottom: 28, display: 'flex', justifyContent: 'space-between' }}>
              <span>{D.tagline}</span>
              <span>01 / 09 — Hero</span>
            </div>

            <h1 style={{
              margin: 0,
              fontSize: 160, lineHeight: 0.88, letterSpacing: '-0.055em',
              fontWeight: 400,
            }}>
              <span style={{ display: 'block' }}>Mooie</span>
              <span style={{ display: 'block', color: accent, fontStyle: 'italic', fontWeight: 300 }}>Shopify-</span>
              <span style={{ display: 'block' }}>shops<span style={{ color: muted }}>.</span></span>
              <span style={{
                display: 'block', fontSize: 64, fontStyle: 'italic', fontWeight: 300,
                marginTop: 20, letterSpacing: '-0.03em',
                color: muted,
              }}>
                Gebouwd om te verkopen<span style={{ color: accent }}>.</span>
              </span>
            </h1>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
              marginTop: 72, alignItems: 'end',
            }}>
              <p style={{ fontSize: 16, lineHeight: 1.5, color: '#cfc9bb', margin: 0 }}>
                {D.description}
              </p>
              <div>
                <div style={{ ...kicker, marginBottom: 10 }}>Beschikbaarheid</div>
                <div style={{ fontFamily: font.mono, fontSize: 14, lineHeight: 1.6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${rule}`, padding: '6px 0' }}>
                    <span>Apr 2026</span><span style={{ color: '#e06b3e' }}>VOL</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${rule}`, padding: '6px 0' }}>
                    <span>Mei 2026</span><span style={{ color: accent }}>1 plek</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${rule}`, padding: '6px 0' }}>
                    <span>Juni 2026</span><span style={{ color: '#5cc678' }}>2 plekken</span>
                  </div>
                </div>
              </div>
              <div>
                <button data-cursor="start" style={{
                  width: '100%', padding: '18px 0',
                  background: accent, color: bg, border: 'none',
                  fontFamily: font.mono, fontSize: 12, letterSpacing: '0.16em',
                  textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600,
                }}>
                  ↗ Reserveer mijn plek
                </button>
                <div style={{ ...kicker, marginTop: 10, textAlign: 'center' }}>Gratis · 20 minuten</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ ...kicker, writingMode: 'vertical-rl', textAlign: 'right' }}>
              Scroll ↓ / {D.about.based}
            </div>
          </div>
        </div>
      </div>

      {/* HERO VISUAL — split showreel */}
      <div style={{ padding: '40px 40px 120px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
          gap: 4,
          aspectRatio: '16 / 8',
        }}>
          <div style={{ background: stripesDark(), position: 'relative' }}>
            <Spec tl="FEATURE" tr="2:1" bl="ATELIER M" br={font.mono} mono={font.mono} fg={fg} />
          </div>
          <div style={{ background: stripesDark(), position: 'relative' }}>
            <Spec tl="EDITORIAL" tr="1:2" bl="VALORE" br={font.mono} mono={font.mono} fg={fg} />
          </div>
          <div style={{ background: stripesDark(), position: 'relative' }}>
            <Spec tl="CAMPAIGN" tr="1:2" bl="NKSTCO" br={font.mono} mono={font.mono} fg={fg} />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        borderTop: `1px solid ${rule}`,
        borderBottom: `1px solid ${rule}`,
        padding: '72px 40px',
      }}>
        <div style={{ ...kicker, marginBottom: 40 }}>§ 02 — Harde cijfers — sinds 2019</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {D.stats.map((s, i) => (
            <div key={i} style={{
              padding: '0 28px',
              borderLeft: i === 0 ? 'none' : `1px solid ${rule}`,
            }}>
              <div style={{
                fontFamily: font.mono, fontSize: 72,
                lineHeight: 1, letterSpacing: '-0.04em',
                color: i === 1 ? accent : fg,
                fontWeight: 400,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 13, color: muted, lineHeight: 1.4, marginTop: 16,
                maxWidth: 200, paddingTop: 12, borderTop: `1px solid ${rule}`,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WORK INDEX */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, marginBottom: 56 }}>
          <div>
            <div style={kicker}>§ 03 — Werk</div>
            <h2 style={{ fontSize: 84, letterSpacing: '-0.04em', fontWeight: 400, margin: '20px 0 0', lineHeight: 0.95 }}>
              Index<span style={{ color: accent }}>.</span>
            </h2>
          </div>
          <div style={{ alignSelf: 'end', fontFamily: font.mono, fontSize: 12, color: muted, lineHeight: 1.6, maxWidth: 520 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${rule}`, paddingBottom: 8, marginBottom: 8 }}>
              <span>SELECTIE</span><span>11 / 40+</span>
            </div>
            Een doorsnede van merken waar ik mee gebouwd heb. Klik op een rij voor de case.
          </div>
        </div>

        {/* Grid of project cells */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 0, border: `1px solid ${rule}`,
        }}>
          {D.projects.map((p, i) => (
            <ProjectCell key={p.id} p={p} i={i} accent={accent} fg={fg} muted={muted} rule={rule} mono={font.mono} bg={bg} />
          ))}
          {/* "More" tile to fill the grid */}
          <div style={{
            gridColumn: 'span 4',
            minHeight: 220,
            padding: 20,
            borderLeft: `1px solid ${rule}`,
            borderTop: `1px solid ${rule}`,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            background: accent, color: bg,
          }}
            data-cursor="alle">
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '0.18em' }}>+29 MEER</div>
            <div style={{ fontSize: 28, letterSpacing: '-0.02em', fontWeight: 500 }}>Bekijk het volledige archief →</div>
          </div>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={kicker}>§ 04 — Voor/Na</div>
            <h2 style={{ fontSize: 72, letterSpacing: '-0.035em', fontWeight: 400, margin: '20px 0 0', lineHeight: 1 }}>
              Sleep.<br/>Zie het<br/>verschil<span style={{ color: accent }}>.</span>
            </h2>
          </div>
          <div style={{ alignSelf: 'end', fontSize: 16, lineHeight: 1.5, color: '#cfc9bb', maxWidth: 560 }}>
            Een Dawn-template met stockfoto's is makkelijk. Een shop die jouw merk voelt, jouw kopers overtuigt en jouw marge verdient — dat is het werk. Sleep de handle.
          </div>
        </div>
        <BeforeAfter accent={accent} height={580} />
      </div>

      {/* SERVICES */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, marginBottom: 56 }}>
          <div>
            <div style={kicker}>§ 05 — Diensten</div>
            <h2 style={{ fontSize: 72, letterSpacing: '-0.035em', fontWeight: 400, margin: '20px 0 0', lineHeight: 1 }}>
              End-to-end<span style={{ color: accent }}>.</span>
            </h2>
          </div>
          <div style={{ alignSelf: 'end', fontSize: 15, lineHeight: 1.5, color: muted, maxWidth: 520 }}>
            Ik ben je rechterhand. Bouwen, schrijven, campagnes draaien, meten en bijsturen.
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
          border: `1px solid ${rule}`,
        }}>
          {D.services.map((s, i) => (
            <ServiceCell key={s.n} s={s} i={i} accent={accent} fg={fg} muted={muted} rule={rule} mono={font.mono} />
          ))}
        </div>
      </div>

      {/* PROCESS — timeline */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...kicker, marginBottom: 28 }}>§ 06 — Proces</div>
        <h2 style={{ fontSize: 96, letterSpacing: '-0.04em', fontWeight: 400, margin: 0, lineHeight: 0.95, marginBottom: 80 }}>
          Vier weken<span style={{ color: accent }}>.</span> Vier fases<span style={{ color: accent }}>.</span>
        </h2>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          <div style={{ position: 'absolute', top: 48, left: 24, right: 24, height: 1, background: rule }} />
          <div style={{ position: 'absolute', top: 48, left: 24, width: 'calc((100% - 48px) * 0.33)', height: 1, background: accent }} />
          {D.process.map((p, i) => (
            <div key={p.n} style={{ padding: '0 24px', position: 'relative' }}>
              <div style={{
                position: 'relative', zIndex: 2,
                width: 48, height: 48, borderRadius: '50%',
                background: i === 0 ? accent : bg,
                border: `1px solid ${i === 0 ? accent : rule}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: font.mono, fontSize: 14, fontWeight: 500,
                color: i === 0 ? bg : muted,
                marginLeft: -24, marginBottom: 32,
              }}>{p.n}</div>
              <div style={{ ...kicker, marginBottom: 8 }}>Week {i + 1}</div>
              <h4 style={{ fontSize: 24, letterSpacing: '-0.02em', fontWeight: 500, margin: '0 0 12px' }}>{p.t}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: muted, margin: 0 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS - big pull quote */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...kicker, marginBottom: 40 }}>§ 07 — Wat klanten zeggen</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          {D.testimonials.map((t, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr 200px', gap: 32,
              padding: '48px 0',
              borderTop: `1px solid ${rule}`,
              alignItems: 'start',
            }}>
              <div style={{ ...kicker }}>0{i + 1}/0{D.testimonials.length}</div>
              <blockquote style={{
                margin: 0,
                fontSize: 40, letterSpacing: '-0.025em', lineHeight: 1.15, fontWeight: 400,
              }}>
                <span style={{ color: accent, marginRight: 8 }}>“</span>
                {t.q}
              </blockquote>
              <div style={{ ...kicker, textAlign: 'right', color: fg }}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 64 }}>
          <div>
            <div style={kicker}>§ 08 — Over Dave</div>
            <h2 style={{ fontSize: 88, letterSpacing: '-0.04em', fontWeight: 400, margin: '24px 0 32px', lineHeight: 0.95 }}>
              Één gezicht<span style={{ color: accent }}>.</span><br/>
              <span style={{ color: muted, fontStyle: 'italic', fontWeight: 300 }}>Geen agency.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: '#cfc9bb', margin: '0 0 20px', maxWidth: 520 }}>
              {D.about.bio}
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24, marginTop: 48, borderTop: `1px solid ${rule}`, paddingTop: 24,
            }}>
              <div>
                <div style={kicker}>Locatie</div>
                <div style={{ fontSize: 16, marginTop: 8 }}>{D.about.based}</div>
              </div>
              <div>
                <div style={kicker}>Actief sinds</div>
                <div style={{ fontSize: 16, marginTop: 8 }}>{D.about.since}</div>
              </div>
              <div>
                <div style={kicker}>Favoriet</div>
                <div style={{ fontSize: 16, marginTop: 8 }}>Shopify Plus builds</div>
              </div>
            </div>
          </div>
          <div style={{
            aspectRatio: '4/5', background: stripesDark(),
            border: `1px solid ${rule}`, position: 'relative',
          }}>
            <Spec tl="P01" tr="4:5" bl="DAVE" br="2026" mono={font.mono} fg={fg} />
            <div style={{
              position: 'absolute', left: 20, bottom: 20,
              fontFamily: font.mono, fontSize: 11, color: accent, letterSpacing: '0.15em',
            }}>
              [ PORTRET — PLACEHOLDER ]
            </div>
          </div>
        </div>
      </div>

      {/* PACKAGES */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...kicker, marginBottom: 28 }}>§ 09 — Pakketten</div>
        <h2 style={{ fontSize: 88, letterSpacing: '-0.04em', fontWeight: 400, margin: '0 0 72px', lineHeight: 0.95 }}>
          Drie opties<span style={{ color: accent }}>.</span> Eerlijke prijs<span style={{ color: accent }}>.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {D.packages.map((p) => (
            <div key={p.name} style={{
              border: `1px solid ${p.featured ? accent : rule}`,
              padding: 32,
              background: p.featured ? '#1a1714' : 'transparent',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ ...kicker, color: p.featured ? accent : muted }}>
                  {p.featured ? '★ MEEST GEKOZEN' : p.name.toUpperCase()}
                </div>
                <div style={{ fontFamily: font.mono, fontSize: 10, color: muted }}>P0{D.packages.indexOf(p) + 1}</div>
              </div>
              <h3 style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', margin: '20px 0 4px' }}>{p.name}</h3>
              <div style={{
                fontFamily: font.mono, fontSize: 52, letterSpacing: '-0.03em',
                color: fg, marginTop: 24, lineHeight: 1,
              }}>{p.price}</div>
              <div style={{ ...kicker, color: muted, marginTop: 6 }}>{p.unit}</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: '#cfc9bb', margin: '24px 0' }}>{p.for}</p>
              <div style={{ height: 1, background: rule, margin: '0 0 20px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.includes.map((x, j) => (
                  <li key={j} style={{ fontSize: 13, lineHeight: 1.45, display: 'flex', gap: 10, color: '#cfc9bb' }}>
                    <span style={{ color: accent, fontFamily: font.mono, flexShrink: 0 }}>[+]</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <button data-cursor="kies" style={{
                marginTop: 28, width: '100%', padding: '14px 0',
                background: p.featured ? accent : 'transparent',
                color: p.featured ? bg : fg,
                border: `1px solid ${p.featured ? accent : rule}`,
                fontFamily: font.mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                cursor: 'pointer', fontWeight: 500,
              }}>
                Kies → {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '120px 40px', borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
          <div>
            <div style={kicker}>§ 10 — Vragen</div>
            <h2 style={{ fontSize: 72, letterSpacing: '-0.035em', fontWeight: 400, margin: '20px 0 0', lineHeight: 1 }}>
              FAQ<span style={{ color: accent }}>.</span>
            </h2>
          </div>
          <div>
            {D.faq.map((f, i) => (
              <FaqRowB key={i} f={f} n={i} mono={font.mono} rule={rule} accent={accent} muted={muted} fg={fg} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '140px 40px', background: accent, color: bg, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ ...kicker, color: bg, opacity: 0.7, marginBottom: 24 }}>§ 11 — Contact</div>
          <h2 style={{
            margin: 0,
            fontSize: 240, lineHeight: 0.85, letterSpacing: '-0.06em', fontWeight: 400,
          }}>
            Laten we<br/><em style={{ fontStyle: 'italic', fontWeight: 300 }}>praten.</em>
          </h2>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40, marginTop: 96, paddingTop: 32,
            borderTop: `1px solid rgba(0,0,0,.3)`,
          }}>
            <div>
              <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>E-mail</div>
              <div data-cursor="mail" style={{ fontSize: 22, marginTop: 8, letterSpacing: '-0.015em', cursor: 'pointer' }}>
                dave@davebuilds.nl
              </div>
            </div>
            <div>
              <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Telefoon</div>
              <div style={{ fontSize: 22, marginTop: 8, letterSpacing: '-0.015em' }}>+31 6 34 21 09 88</div>
            </div>
            <div>
              <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>Instagram</div>
              <div style={{ fontSize: 22, marginTop: 8, letterSpacing: '-0.015em' }}>@davebuilds</div>
            </div>
            <div>
              <button data-cursor="plan" style={{
                width: '100%', padding: '22px 0',
                background: bg, color: fg, border: 'none',
                fontFamily: font.mono, fontSize: 13, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                cursor: 'pointer',
              }}>
                Plan gesprek →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '40px 40px', background: bg, color: muted,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: font.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        <span>© 2026 Davebuilds™ · All rights reserved</span>
        <span>KVK 7612 4498 · BTW NL004.21.833.B01</span>
        <span>Gemaakt in NL — 52.37°N / 4.89°E</span>
      </div>
    </div>
  );
}

function ProjectCell({ p, i, accent, fg, muted, rule, mono, bg }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-cursor="bekijk"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: 'span 4',
        minHeight: 220,
        padding: 20,
        borderLeft: i % 3 === 0 ? 'none' : `1px solid ${rule}`,
        borderTop: i >= 3 ? `1px solid ${rule}` : 'none',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer',
        background: hover ? stripesDark() : 'transparent',
        transition: 'background .3s',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.2em', color: muted }}>
          0{(i + 1).toString().padStart(2, '0')} / {p.year}
        </div>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.12em', color: accent }}>
          {p.result}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 32, letterSpacing: '-0.025em', fontWeight: 500, marginBottom: 6, color: fg }}>
          {p.name}
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.12em', color: muted, textTransform: 'uppercase' }}>
          {p.sector} ↗
        </div>
      </div>
    </div>
  );
}

function ServiceCell({ s, i, accent, fg, muted, rule, mono }) {
  const bigCol = i === 0 || i === 3;
  return (
    <div data-cursor={s.t.toLowerCase()} style={{
      gridColumn: bigCol ? 'span 3' : 'span 2',
      minHeight: 220,
      padding: 28,
      borderLeft: i % 3 === 0 ? 'none' : `1px solid ${rule}`,
      borderTop: i >= 3 ? `1px solid ${rule}` : 'none',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      cursor: 'pointer', position: 'relative',
      background: i === 0 ? accent : 'transparent',
      color: i === 0 ? '#0e0e0c' : fg,
    }}>
      <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', opacity: 0.7 }}>
        {s.n}
      </div>
      <div>
        <h3 style={{ fontSize: bigCol ? 34 : 24, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.05 }}>
          {s.t}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.5, opacity: i === 0 ? 0.8 : 1, color: i === 0 ? '#0e0e0c' : muted, margin: 0 }}>
          {s.d}
        </p>
      </div>
    </div>
  );
}

function FaqRowB({ f, n, mono, rule, accent, muted, fg }) {
  const [open, setOpen] = React.useState(n === 0);
  return (
    <div style={{ borderTop: n === 0 ? `1px solid ${rule}` : 'none', borderBottom: `1px solid ${rule}` }}>
      <button
        data-cursor={open ? 'sluit' : 'open'}
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', padding: '24px 0',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          textAlign: 'left', color: fg, fontFamily: 'inherit',
        }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: muted }}>
            [{String(n + 1).padStart(2, '0')}]
          </span>
          <span style={{ fontSize: 22, letterSpacing: '-0.015em', fontWeight: 500 }}>{f.q}</span>
        </div>
        <span style={{ fontFamily: mono, fontSize: 16, color: accent }}>{open ? '[ − ]' : '[ + ]'}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24, paddingLeft: 60, fontSize: 15, lineHeight: 1.55, color: muted, maxWidth: 680 }}>
          {f.a}
        </div>
      )}
    </div>
  );
}

function Spec({ tl, tr, bl, br, mono, fg }) {
  const s = {
    position: 'absolute', padding: 14,
    fontFamily: mono, fontSize: 10, letterSpacing: '0.16em',
    color: 'rgba(242,239,232,.5)', textTransform: 'uppercase',
  };
  return (
    <>
      <div style={{ ...s, top: 0, left: 0 }}>{tl}</div>
      <div style={{ ...s, top: 0, right: 0 }}>{tr}</div>
      <div style={{ ...s, bottom: 0, left: 0 }}>{bl}</div>
      <div style={{ ...s, bottom: 0, right: 0 }}>+</div>
    </>
  );
}

function stripesDark() {
  return `repeating-linear-gradient(135deg, #1a1a16 0 1px, #121210 1px 14px)`;
}

Object.assign(window, { DirectionB });
