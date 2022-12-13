import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzModule } from './fizz/fizz.module';

@Module({
  imports: [FizzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
