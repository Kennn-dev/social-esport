import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(
    `
      Server run at port http://localhost:${PORT}/ 
      ***
      GraphQL http://localhost:${PORT}/graphql`,
  );
}
bootstrap();
