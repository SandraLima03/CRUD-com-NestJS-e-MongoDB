/* eslint-disable prettier/prettier */
//Arquivo principal da aplicação, onde são importados os módulos e configurado o banco de dados
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantasModule } from './plantas/plantas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority`),
    PlantasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
