export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy page-shell">
        <span className="eyebrow hero-eyebrow">
          <span className="eyebrow-dot" />
          ESQUINEROS · IMPRESIÓN 3D
        </span>
        <h1>
          Tu imaginación
          <br />
          no tiene <span>esquinas.</span>
        </h1>
        <p className="hero-description">
          Conectá tubos, inventá estructuras y convertí cada idea en algo real.
          Elegí tu color y empezá a crear.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#producto">
            Explorar catálogo <ArrowIcon />
          </a>
         {/*  <a className="text-link" href="#como-funciona">
            Ver ideas
          </a> */}
        </div>
        <div className="hero-note">
          <span className="hero-note-mark" aria-hidden="true">IM3D</span>
          <span>Diseñados para jugar, aprender y construir</span>
        </div>
      </div>
      <a className="hero-scroll" href="#producto" aria-label="Desplazarse al catálogo">
        <span aria-hidden="true">↓</span>
        DESCUBRÍ IM3D
      </a>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}
