import { calcularPromedio } from './promedio';

describe('calcularPromedio', () => {          // abre describe
  test('promedia varias notas', () => {       // abre test
    expect(calcularPromedio([8, 10, 6])).toBe(8);
  });                                         // cierra test

  test('redondea a un decimal', () => {
    expect(calcularPromedio([7, 8])).toBe(7.5);
    expect(calcularPromedio([9, 9, 10])).toBe(9.3);
  });

  test('devuelve 0 si no hay notas', () => {
    expect(calcularPromedio([])).toBe(0);
  });
});                                           // cierra describe