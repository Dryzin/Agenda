import { Guid } from "guid-typescript";

export interface Pessoa {

    id: Guid
    nome: string
    sobrenome: string
    tel: string
    email: string
    tipo: string
    
}