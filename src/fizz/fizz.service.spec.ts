import { Test, TestingModule } from '@nestjs/testing';
import { FizzService } from './fizz.service';

describe('FizzService', () => {
  let service: FizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzService],
    }).compile();

    service = module.get<FizzService>(FizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Probando metodo Fizz', () => {
    it('Debe de devolver Fizz si es multiplo de 3', () => {
      expect(service.fizzbuzz(3)).toBe('Fizz');
    });

    it('Debe de devolver Buzz si es multiplo de 5', () => {
      expect(service.fizzbuzz(5)).toBe('Buzz');
    });

    it('Debe de devolver FizzBuzz si es multiplo de 15', () => {
      expect(service.fizzbuzz(15)).toBe('FizzBuzz');
    });

    it('Debe de devolver el numero si no es multiplo de 3,5 o 15', () => {
      expect(service.fizzbuzz(2)).toBe(2);
    });

    it('Si el numero es mayor de 100 o menor de 0 devolvera Undefined', () => {
      expect(service.fizzbuzz(105)).toBe(undefined);
      expect(service.fizzbuzz(0)).toBe(undefined);
    });
  });

  describe('Probando funcion de Par e Impar', () => {
    it('El 2 es par: ', () => {
      expect(service.par_impar(2)).toBe('par');
    });

    it('El 5 es impar: ', () => {
      expect(service.par_impar(5)).toBe('impar');
    });
  });
});
