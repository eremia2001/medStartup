import { toast } from "react-toastify";

export function useToast() {
  // Ein optionaler zweiter Parameter "type" wird hinzugefügt
  function showToast(message, type = "warn") {
    // Entscheidet basierend auf dem "type"-Parameter, welche Art von Toast angezeigt wird
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };

    switch(type) {
      case 'info':
        toast.info(message, options);
        break;
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'warn':
      default:
        toast.warn(message, options);
        break;
    }
  }

  return {
    showToast,
  };
}
