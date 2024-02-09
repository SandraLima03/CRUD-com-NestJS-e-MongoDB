/* eslint-disable prettier/prettier */
// Arquivo responsável por configurar o módulo de plantas
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PlantasSchema } from './schemas/plantas.schemas';
import { PlantasController } from './plantas.controller';
import { PlantasService } from './shared/plantas.service/plantas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Plantas', schema: PlantasSchema }]),
  ],
  controllers: [PlantasController],
  providers: [PlantasService],
})
export class PlantasModule {}
