// hooks/useToast.js
import { toast } from "react-toastify";

export function useToast() {
  function showToast(message) {
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return {
    showToast,
  };
}
