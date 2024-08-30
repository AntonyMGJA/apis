import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const axios = require('axios');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription('CapsuleCare API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Api', app, document)

  app.enableCors();
  await app.listen(process.env.PORT || 3000);

//   async function getData() {
//     try {
//         // Haciendo una solicitud GET a la API interna
//         const response = await axios.get('http://api_prueba.railway.internal/api/endpoint');
//         console.log('Datos recibidos:', response.data);
//     } catch (error) {
//         console.error('Error al comunicarse con api_prueba:', error);
//     }
//}
// getData();
}
bootstrap();
