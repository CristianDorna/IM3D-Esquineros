import Brand from "./Brand.jsx";
import { store } from "../data/store.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <Brand />
        <p>Hecho para construir ideas. <span>© {new Date().getFullYear()} IM3D</span></p>
        <a href={store.instagramUrl} target="_blank" rel="noreferrer">
          Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
