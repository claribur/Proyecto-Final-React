import { useEffect } from "react";

function useTitulo(titulo) {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
}

export default useTitulo;
