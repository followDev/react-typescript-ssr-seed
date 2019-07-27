import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app/app.module';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	const options = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('cats')
		.addBearerAuth('Authorization', 'header')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('swagger', app, document);

	await app.listen(process.env.PORT || '3000');

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(async () => {
			app.close();
			// service.close();
		});
	}
}
bootstrap();
