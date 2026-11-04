import blackCorner from "../../IMG/hero-esquinero.png";
import whiteCorners from "../../IMG/img3.jpeg";
import blackCornersInUse from "../../IMG/img1.jpeg";
import cubeBuild from "../../IMG/img7.jpeg";

export const products = [
  {
    id: "esquinero-negro",
    name: "Esquinero para cubo didáctico",
    color: "Negro",
    colorHex: "#20242c",
    image: blackCorner,
    imageAlt: "Esquinero negro IM3D con perillas de ajuste",
    price: "Consultar precio",
    description: "Un clásico, listo para combinar con tus ideas.",
    label: "Más elegido",
  },
  {
    id: "esquinero-blanco",
    name: "Esquinero para cubo didáctico",
    color: "Blanco",
    colorHex: "#f1f0eb",
    image: whiteCorners,
    imageAlt: "Esquineros blancos instalados en una estructura",
    price: "Consultar precio",
    description: "Un acabado claro para darle otra personalidad.",
    label: "También en blanco",
  },
];

export const galleryImages = [
  {
    src: blackCornersInUse,
    alt: "Estructura cúbica construida con tubos de madera y esquineros negros",
    caption: "Un cubo para jugar y aprender",
  },
  {
    src: whiteCorners,
    alt: "Esquineros blancos y negros listos para armar nuevas estructuras",
    caption: "Mezclá colores, creá posibilidades",
  },
  {
    src: cubeBuild,
    alt: "Estructura de juego armada con tubos y conectores IM3D",
    caption: "Construcciones a tu manera",
  },
];
