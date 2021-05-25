import { Asignatura } from "./asignatura";
import { Pregunta } from "./pregunta";
import { Respuesta } from "./respuesta";

export class Examen {
    id!: number; 
    nombre!: string;
    createAt!: string;
    asignatura: Asignatura[]= [];
    pregunta: Pregunta[] = [];
    respondido: boolean = false;
}
