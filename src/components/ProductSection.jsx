import { products } from "../data/products.js";

export default function ProductSection({ onAddToCart, cartItems }) {
  return (
    <section className="product-section section-pad" id="producto">
      <div className="page-shell">
        <div className="section-heading product-heading">
          <div>
            <p className="eyebrow">ELEGÍ TU COMBINACIÓN</p>
            <h2>Dos colores.<br />Mil ideas.</h2>
          </div>
          <p>
            Esquineros para conectar tubos y armar estructuras. Elegí el color
            que mejor acompaña tu próximo proyecto.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => {
            const quantity = cartItems[product.id] ?? 0;

            return (
              <article className={`product-card product-card-${index + 1}`} key={product.id}>
                <div className="product-image-wrap">
                  <span className="product-tag">
                    <span
                      className="swatch-dot"
                      style={{ backgroundColor: product.colorHex }}
                    />
                    {product.label}
                  </span>
                  <img src={product.image} alt={product.imageAlt} loading="lazy" />
                  <span className="product-image-index">0{index + 1}</span>
                </div>
                <div className="product-card-info">
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-color">Color {product.color.toLowerCase()}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <button
                    className={`add-button${quantity > 0 ? " is-added" : ""}`}
                    type="button"
                    onClick={() => onAddToCart(product.id)}
                    aria-label={`Agregar esquinero color ${product.color} al pedido`}
                  >
                    {quantity > 0 ? (
                      <><span className="added-check" aria-hidden="true">✓</span> En el pedido ({quantity})</>
                    ) : (
                      <>Sumar al pedido <PlusIcon /></>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="product-disclaimer">
          Consultanos por WhatsApp para conocer disponibilidad y coordinar la entrega.
        </p>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M4 10h12" />
    </svg>
  );
}
