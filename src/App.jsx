import { useState } from "react";
import CartDrawer from "./components/CartDrawer.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import IdeasSection from "./components/IdeasSection.jsx";
import ProductSection from "./components/ProductSection.jsx";
import { products } from "./data/products.js";
import { store } from "./data/store.js";

export default function App() {
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  function addToCart(productId) {
    setCartItems((currentItems) => ({
      ...currentItems,
      [productId]: (currentItems[productId] ?? 0) + 1,
    }));
  }

  function changeQuantity(productId, quantity) {
    setCartItems((currentItems) => {
      if (quantity < 1) {
        const nextItems = { ...currentItems };
        delete nextItems[productId];
        return nextItems;
      }

      return { ...currentItems, [productId]: quantity };
    });
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) => {
      const nextItems = { ...currentItems };
      delete nextItems[productId];
      return nextItems;
    });
  }

  return (
    <>
      <div className="announcement">
        <span>UNA IDEA QUE SE CONSTRUYE</span>
        <span className="announcement-divider" aria-hidden="true">✳</span>
        <span>ESQUINEROS PARA CUBOS DIDÁCTICOS</span>
      </div>
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <div className="value-strip">
          <div className="page-shell value-strip-inner">
            <span>Diseño pensado para crear</span>
            <span className="value-star" aria-hidden="true">✳</span>
            <span>Impresión 3D</span>
            <span className="value-star" aria-hidden="true">✳</span>
            <span>Hecho en Argentina</span>
            <span className="value-star" aria-hidden="true">✳</span>
            <span>Ideas sin límites</span>
          </div>
        </div>
        <ProductSection onAddToCart={addToCart} cartItems={cartItems} />
        <IdeasSection />
        <FAQSection />
        <ContactSection cartItems={cartItems} products={products} />
      </main>
      <Footer />
      <FloatingWhatsApp whatsappNumber={store.whatsappNumber} />
      <CartDrawer
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
        products={products}
        whatsappNumber={store.whatsappNumber}
      />
    </>
  );
}
