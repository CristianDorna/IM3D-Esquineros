import Brand from "./Brand.jsx";

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#producto">El producto</a>
          <a href="#ideas">Ideas</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <button className="cart-button" type="button" onClick={onOpenCart}>
          <CartIcon />
          <span>Mi pedido</span>
          <span className="cart-count" aria-label={`${cartCount} productos`}>
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 4.5h2l2.2 10.1a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 1.9-1.5L21 8H7" />
      <circle cx="10.2" cy="19.3" r="1.2" />
      <circle cx="17.4" cy="19.3" r="1.2" />
    </svg>
  );
}
