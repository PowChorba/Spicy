import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '../config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders:[ 'Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Origin', 'X-Requested-With',
    'Authorization' ],
    origin: ['http://localhost:3000']
  });
  await app.listen(3001);
}
bootstrap();
