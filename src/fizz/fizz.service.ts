import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzService {
  fizzbuzz(number: number) {
    if (number < 1 || number > 100) {
      return;
    }
    if (number % 15 === 0) {
      return 'FizzBuzz';
    }
    if (number % 3 === 0) {
      return 'Fizz';
    }
    if (number % 5 === 0) {
      return 'Buzz';
    }
    return number;
  }

  par_impar(number: number) {
    if (number % 2 === 0) {
      return 'par';
    } else {
      return 'impar';
    }
  }
}
