import { Asignatura } from "./asignatura";
import { Generic } from "./generic";
import { Pregunta } from "./pregunta";
import { Respuesta } from "./respuesta";

export class Examen implements Generic{
    id!: number; 
    nombre!: string;
    createAt!: string;
    asignaturaPadre!: Asignatura;
    asignaturaHija!: Asignatura;
    preguntas: Pregunta[] = [];
    respondido: boolean = false;
}
