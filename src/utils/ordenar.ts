import { Juego } from "../types/juego";

export function ordenarPorFecha(juegos: Juego[]) {
  const copia = [...juegos];
  const juegosOrdenados = copia.sort((a, b) =>
    b.fechaTerminado.localeCompare(a.fechaTerminado),
  );
  return juegosOrdenados;
}
