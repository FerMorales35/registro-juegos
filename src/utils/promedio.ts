export function calcularPromedio(notas: number[]): number {
  if (notas.length === 0) return 0;
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  const dividido = suma / notas.length;
  const decimal = dividido * 10;
  return Math.round(decimal) / 10;
}
