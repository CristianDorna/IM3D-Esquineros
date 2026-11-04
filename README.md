# IM3D Esquineros

Tienda inicial para mostrar esquineros para cubos didácticos y preparar consultas
de pedidos por WhatsApp. Está hecha con React, JavaScript y CSS; los componentes,
los datos del catálogo y los estilos están separados para facilitar cambios.

## Requisitos

- Node.js 20.19+ (o 22.12+)
- npm

## Iniciar en desarrollo

```bash
npm install
npm run dev
```

Abrí en el navegador la dirección que muestra Vite en la terminal.

## Generar versión de producción

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

1. Subí este proyecto a un repositorio de GitHub. La rama de publicación debe
   llamarse `main`.
2. En el repositorio, abrí **Settings → Pages** y elegí **GitHub Actions** como
   origen de publicación.
3. Cada cambio que subas a `main` ejecutará el flujo de publicación. También
   podés iniciarlo manualmente desde la pestaña **Actions**.
4. Cuando termine la primera ejecución, GitHub mostrará la dirección del sitio en
   **Settings → Pages**.

El flujo de trabajo configura automáticamente la ruta base para repositorios de
proyecto y para sitios de usuario u organización (`*.github.io`). En local, el
sitio sigue usando la ruta raíz.

## Personalización

- Editá los productos y opciones en `src/data/products.js`.
- Cambiá el teléfono de pedidos en `src/data/store.js`.
- Actualizá textos y preguntas desde los componentes en `src/components/`.
- Las fotos originales se importan desde la carpeta `IMG/`.
