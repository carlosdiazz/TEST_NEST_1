import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('FizzBuzz (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/fizz/2 (GET) return Fizz', () => {
    return request(app.getHttpServer())
      .get('/fizz/3')
      .expect(200)
      .expect('Fizz');
  });

  it('/fizz/par/2 (GET) return Fizz', () => {
    return request(app.getHttpServer())
      .get('/fizz/par/2')
      .expect(200)
      .expect('par');
  });
});
