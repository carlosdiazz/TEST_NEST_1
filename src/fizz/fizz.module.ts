import { Module } from '@nestjs/common';
import { FizzService } from './fizz.service';
import { FizzController } from './fizz.controller';

@Module({
  providers: [FizzService],
  controllers: [FizzController]
})
export class FizzModule {}
