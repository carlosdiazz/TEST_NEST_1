import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FizzService } from './fizz.service';

@Controller('fizz')
export class FizzController {
  constructor(private fizzService: FizzService) {}

  @Get('/par/:number')
  par_impar(@Param('number', ParseIntPipe) number: number) {
    return this.fizzService.par_impar(number);
  }

  @Get(':number')
  fizzbuzz(@Param('number', ParseIntPipe) number: number) {
    return this.fizzService.fizzbuzz(number);
  }
}
