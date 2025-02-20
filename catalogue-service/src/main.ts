import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration Swagger
  

  // Ajout des validations globales
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(process.env.APP_PORT || 3000);
}

bootstrap();
