/* eslint-disable prettier/prettier */
//Aqui é onde a lógica da aplicação é implemendada, como por exemplo, a lógica de negócio
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plantas } from '../plantas';

@Injectable()
export class PlantasService {

    constructor(@InjectModel("Plantas") private readonly plantasModel: Model<Plantas>) { }


    async getAll() {
        return await this.plantasModel.find().exec();
    }

    async getById(id: string) {
        return await this.plantasModel.findById(id).exec();
    }

    async create(plantas: Plantas) {
        const createdProduto = new this.plantasModel(plantas);
        return await createdProduto.save();
    }

    async update(id: string, plantas: Plantas) {
        await this.plantasModel.updateOne({ _id: id }, plantas).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        await this.plantasModel.deleteOne({ _id: id }).exec();
    }
}
