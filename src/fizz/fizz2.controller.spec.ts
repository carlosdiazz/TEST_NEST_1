import { Test, TestingModule } from '@nestjs/testing';

import { FizzController } from './fizz.controller';
import { FizzService } from './fizz.service';

describe('FizzController', () => {
  let controller: FizzController;
  let service: FizzService;

  const mockedFizzBuzzValue = 'Buzz';
  const mockFizzBuzzService = {
    fizzbuzz: () => mockedFizzBuzzValue,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzController],
      providers: [FizzService],
    })
      .overrideProvider(FizzService)
      .useValue(mockFizzBuzzService)
      .compile();

    controller = module.get<FizzController>(FizzController);
    service = module.get<FizzService>(FizzService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Probando el servicio', () => {
    const result = 'Fizz';
    const fizzbuzzSpy = jest
      .spyOn(service, 'fizzbuzz')
      .mockImplementation(() => result);
    expect(controller.fizzbuzz(3)).toBe(result);
    fizzbuzzSpy.mockRestore();
  });

  it('Probando el mock del servicio', () => {
    expect(controller.fizzbuzz(5)).toBe(mockedFizzBuzzValue);
  });
});
