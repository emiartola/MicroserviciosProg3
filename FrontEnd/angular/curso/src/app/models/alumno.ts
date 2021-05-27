import { Injectable } from "@angular/core";
import { Generic } from "./generic";

@Injectable()
export class Alumno implements Generic {
    id!: number;
    nombre!: string;
    apellido!: string;
    email!: string;
    createAt!: string;
    fotoHashCode!: number;
}
