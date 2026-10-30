export type Juego = {
  id: string;
  titulo: string;
  consola: string;
  nota: number;
  era: "8bit" | "16bit" | "moderno";
  fechaTerminado: string;
};
