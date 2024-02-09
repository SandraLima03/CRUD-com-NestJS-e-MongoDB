/* eslint-disable prettier/prettier */
//Arquivo de modelo do banco de dados
import * as mongoose from 'mongoose';

export const PlantasSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nome: { type: String, required: true, unique: true },
    descricao: String,
    localidade: String,
    endereco: String,
    dataCriacao: Date,
})