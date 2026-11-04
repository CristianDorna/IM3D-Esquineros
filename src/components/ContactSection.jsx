import { store } from "../data/store.js";
import { WhatsAppIcon } from "./CartDrawer.jsx";

export default function ContactSection({ cartItems, products }) {
  const chosenItems = Object.entries(cartItems)
    .map(([id, quantity]) => ({
      product: products.find((product) => product.id === id),
      quantity,
    }))
    .filter(({ product, quantity }) => product && quantity > 0);

  const lines = chosenItems.map(
    ({ product, quantity }) =>
      `• ${product.color}: ${quantity} ${quantity === 1 ? "unidad" : "unidades"}`,
  );
  const message = [
    "¡Hola! Quiero consultar por los esquineros IM3D.",
    ...lines,
    "¿Me pasan precio y disponibilidad?",
  ].join("\n");
  const whatsappUrl = `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="contact-section">
      <div className="contact-decoration contact-decoration-one" aria-hidden="true">✳</div>
      <div className="contact-decoration contact-decoration-two" aria-hidden="true">✳</div>
      <div className="page-shell contact-inner">
        <p className="eyebrow">TU PRÓXIMA IDEA TE ESPERA</p>
        <h2>¿Qué vas a crear<br />hoy?</h2>
        <p className="contact-copy">
          Elegí tus esquineros y hablemos de ese proyecto que tenés en mente.
        </p>
        <a
          className="button button-light"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          Hablemos por WhatsApp
          <ArrowIcon />
        </a>
        <a className="instagram-link" href={store.instagramUrl} target="_blank" rel="noreferrer">
          También estamos en Instagram <span>@im3d_esquineros</span>
        </a>
      </div>
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
