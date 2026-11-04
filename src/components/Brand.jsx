import brandLogo from "../../IMG/logo letra sin fondo.svg";

export default function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="IM3D Esquineros, inicio">
      <img src={brandLogo} alt="" aria-hidden="true" />
    </a>
  );
}
