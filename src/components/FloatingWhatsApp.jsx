import { WhatsAppIcon } from "./CartDrawer.jsx";

export default function FloatingWhatsApp({ whatsappNumber }) {
  const message = "¡Hola! Quiero consultar por los esquineros IM3D.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactanos por WhatsApp"
      title="Contactanos por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
