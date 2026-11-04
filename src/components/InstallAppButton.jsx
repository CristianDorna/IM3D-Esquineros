import { useEffect, useRef, useState } from "react";

function isAppInstalled() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isAppleMobileDevice() {
  return (
    /iPhone|iPad|iPod/.test(window.navigator.userAgent) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1)
  );
}

export default function InstallAppButton() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isAppInstalled);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleBeforeInstallPrompt(event) {
      event.preventDefault();
      setInstallPrompt(event);
    }

    function handleAppInstalled() {
      setIsInstalled(true);
      setInstallPrompt(null);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isHelpOpen && dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, [isHelpOpen]);

  async function handleInstallClick() {
    if (isInstalled || !installPrompt) {
      setHelpMessage("");
      setIsHelpOpen(true);
      return;
    }

    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setInstallPrompt(null);
    } catch (error) {
      console.error("No se pudo abrir la instalación de IM3D.", error);
      setHelpMessage(
        "No se pudo abrir la instalación automática. Podés instalarla manualmente con estos pasos:",
      );
      setInstallPrompt(null);
      setIsHelpOpen(true);
    }
  }

  const appleMobileDevice = isAppleMobileDevice();

  return (
    <>
      <button
        className="install-app-button"
        type="button"
        onClick={handleInstallClick}
        aria-label={
          isInstalled ? "Ver cómo abrir la app IM3D" : "Instalar la app IM3D"
        }
      >
        <InstallIcon />
        <span className="install-app-label-wide">
          {isInstalled ? "App instalada" : "Instalar app"}
        </span>
        <span className="install-app-label-compact">
          {isInstalled ? "Instalada" : "Instalar"}
        </span>
      </button>
      <dialog
        className="install-help-dialog"
        ref={dialogRef}
        aria-labelledby="install-help-title"
        onClose={() => setIsHelpOpen(false)}
      >
        <div className="install-help-heading">
          <div>
            <p className="install-help-eyebrow">IM3D ESQUINEROS</p>
            <h2 id="install-help-title">
              {isInstalled ? "La app ya está instalada" : "Instalá la app"}
            </h2>
          </div>
          <button
            className="install-help-close"
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        {helpMessage && <p role="status">{helpMessage}</p>}
        {isInstalled ? (
          <p>Buscá IM3D en la pantalla de inicio o en el menú de aplicaciones.</p>
        ) : appleMobileDevice ? (
          <>
            <p>En iPhone o iPad, abrí esta página en Safari y seguí estos pasos:</p>
            <ol>
              <li>Tocá el botón Compartir.</li>
              <li>Elegí “Añadir a pantalla de inicio”.</li>
              <li>Confirmá con “Añadir”.</li>
            </ol>
          </>
        ) : (
          <>
            <p>
              Si no apareció la instalación automática, usá el menú del
              navegador:
            </p>
            <ol>
              <li>
                En Android, abrí el menú ⋮ de Chrome y elegí “Instalar app” o
                “Agregar a pantalla principal”.
              </li>
              <li>
                En PC, abrí el menú de Chrome o Edge y elegí “Instalar IM3D”.
              </li>
            </ol>
          </>
        )}
      </dialog>
    </>
  );
}

function InstallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.75v11.5m0 0 4-4m-4 4-4-4M5 15.75v3.5h14v-3.5" />
    </svg>
  );
}
