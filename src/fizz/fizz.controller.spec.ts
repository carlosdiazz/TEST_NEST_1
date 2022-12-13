import { Test, TestingModule } from '@nestjs/testing';

import { FizzController } from './fizz.controller';
import { FizzService } from './fizz.service';

describe('FizzController', () => {
  let controller: FizzController;
  let service: FizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzController],
      providers: [FizzService],
    }).compile();

    controller = module.get<FizzController>(FizzController);
    service = module.get<FizzService>(FizzService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Probando la funcion del servicio de Fizz', () => {
    const result = 'Fizz';
    jest.spyOn(service, 'fizzbuzz').mockImplementation(() => result);
    expect(controller.fizzbuzz(3)).toBe(result);
  });

  //it('Probando la funcion de Par e Impar de Fizz', () => {
  //  const result = 'par';
  //  jest.spyOn(service, 'par_impar').mockImplementation(() => result);
  //  expect(controller.par_impar(4)).toBe(result);
  //});
});
