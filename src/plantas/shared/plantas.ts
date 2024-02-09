/* eslint-disable prettier/prettier */
//Arquivo de modelo de dados
import { Document } from "mongoose";
export class Plantas extends Document{
    codigo: string;
    nome: string;
    descricao: string;
    localidade: string;
    endereco: string;
    dataCriacao: Date;   

}
