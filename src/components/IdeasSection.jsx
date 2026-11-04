import { galleryImages } from "../data/products.js";

const steps = [
  {
    number: "01",
    title: "Elegí tus esquineros",
    description: "Encontrá el color que acompaña tu próxima idea.",
  },
  {
    number: "02",
    title: "Ajustá las piezas",
    description: "Usá las perillas para sujetar los tubos de tu estructura.",
  },
  {
    number: "03",
    title: "Poné manos a la obra",
    description: "Conectá, creá y descubrí todo lo que podés armar.",
  },
];

export default function IdeasSection() {
  return (
    <>
      <section className="how-section section-pad" id="como-funciona">
        <div className="page-shell how-inner">
          <div className="how-heading">
            <p className="eyebrow">ASÍ DE SIMPLE</p>
            <h2>Imaginá.<br />Conectá.<br /><span>Construí.</span></h2>
            <p className="how-intro">
              De un cubo didáctico a una estructura para jugar: tus ideas toman
              forma con cada conexión.
            </p>
          </div>
          <ol className="steps-list">
            {steps.map((step) => (
              <li className="step-item" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
            <li className="step-note">
              <span className="step-note-icon" aria-hidden="true">✳</span>
              <span>Tu próximo proyecto empieza con una buena conexión.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="gallery-section section-pad" id="ideas">
        <div className="page-shell">
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow">INSPIRATE Y PONÉ MANOS A LA OBRA</p>
              <h2>¿Qué vas a crear?</h2>
            </div>
            <span className="gallery-counter">UNA PIEZA CLAVE · IM3D</span>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure className={`gallery-card gallery-card-${index + 1}`} key={image.caption}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>
                  <span>0{index + 1}</span>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
