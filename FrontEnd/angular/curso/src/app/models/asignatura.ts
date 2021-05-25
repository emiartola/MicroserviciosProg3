export class Asignatura {
    id!: number; 
    nombre!: string;
    padre: Asignatura = new Asignatura;
    hijos: Asignatura[]= [];
}
