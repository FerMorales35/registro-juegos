import { ordenarPorFecha } from "./ordenar";
import { Juego } from "../types/juego";

const juego: Juego[] = [
  {
    id: "0",
    titulo: "Super Marios Bros 3",
    consola: "NES",
    nota: 10,
    era: "8bit",
    fechaTerminado: "1999-03-26",
  },
  {
    id: "1",
    titulo: "Resident Evil",
    consola: "PlayStation One",
    nota: 10,
    era: "moderno",
    fechaTerminado: "1995-10-11",
  },
  {
    id: "2",
    titulo: "Street Fighter II",
    consola: "Genesis",
    nota: 9,
    era: "16bit",
    fechaTerminado: "2007-08-15",
  },
];

describe("ordenar listado de juegos", () => {
  test("ordenar por fecha", () => {
    const resultado = ordenarPorFecha(juego);
    expect(resultado.map((juego) => juego.fechaTerminado)).toEqual([
      "2007-08-15",
      "1999-03-26",
      "1995-10-11",
    ]);
  });
  test("Lista Vacia", () => {
    const resultado = ordenarPorFecha([]);
    expect(resultado).toEqual([]);
  });
  test("Distinta lista", () => {
    const resultado = ordenarPorFecha(juego);
    expect(resultado).not.toBe(juego);
  });
});
