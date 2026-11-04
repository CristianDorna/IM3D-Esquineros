import { useEffect } from "react";

function formatQuantity(quantity) {
  return `${quantity} ${quantity === 1 ? "unidad" : "unidades"}`;
}

export default function CartDrawer({
  items,
  isOpen,
  onClose,
  onChangeQuantity,
  onRemove,
  products,
  whatsappNumber,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cartItems = Object.entries(items)
    .map(([productId, quantity]) => ({
      product: products.find((product) => product.id === productId),
      quantity,
    }))
    .filter((item) => item.product && item.quantity > 0);

  const orderMessage = [
    "¡Hola! Quiero consultar por estos esquineros:",
    ...cartItems.map(
      ({ product, quantity }) => `• ${product.color}: ${formatQuantity(quantity)}`,
    ),
    "",
    "¿Me pasan precio y disponibilidad?",
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="cart-layer">
      <button
        className="cart-backdrop"
        type="button"
        aria-label="Cerrar carrito"
        onClick={onClose}
      />
      <aside
        className="cart-drawer"
        aria-labelledby="cart-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="cart-heading">
          <div>
            <p className="eyebrow">TU SELECCIÓN</p>
            <h2 id="cart-title">Mi pedido</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Cerrar carrito"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon" aria-hidden="true">＋</span>
            <h3>Tu pedido está vacío</h3>
            <p>Elegí un color y sumá tus esquineros para empezar.</p>
            <button className="button button-dark" type="button" onClick={onClose}>
              Ver opciones
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map(({ product, quantity }) => (
                <li className="cart-item" key={product.id}>
                  <img src={product.image} alt="" />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{product.name}</p>
                    <p className="cart-item-color">Color: {product.color}</p>
                    <div className="quantity-control" aria-label={`Cantidad de color ${product.color}`}>
                      <button
                        type="button"
                        aria-label={`Quitar una unidad de color ${product.color}`}
                        onClick={() => onChangeQuantity(product.id, quantity - 1)}
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label={`Agregar una unidad de color ${product.color}`}
                        onClick={() => onChangeQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    type="button"
                    aria-label={`Quitar ${product.color} del pedido`}
                    onClick={() => onRemove(product.id)}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <p>El precio se confirma al consultar.</p>
              <a
                className="button button-whatsapp button-full"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Consultar por WhatsApp
              </a>
              <span className="cart-note">Tu selección se incluirá en el mensaje.</span>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.2 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4a8.1 8.1 0 1 1 15-4.3Z" />
      <path d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.1 1.4 2 1.8.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.5.5-1.2.7-2 .5-1-.2-2.2-.8-3.5-1.9-1.5-1.3-2.5-3-2.7-4-.2-.9.1-1.7.6-2.1Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
