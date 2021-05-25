import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo = 'Listado de Alumnos';
  alumnos!: Alumno[];

  constructor(private service: AlumnoService) { } //para inyectar servicios

  //para inicializar los datos que queremos mostrar en nustro componente
  ngOnInit() {
    this.service.listar().subscribe(alumnos => this.alumnos = alumnos);
  }

  public eliminar(alumno: Alumno): void {

    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que quieres eliminar a ${alumno.nombre}? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(alumno.id).subscribe(() => {
          this.alumnos = this.alumnos.filter(a => a !== alumno);
          Swal.fire('Eliminado:', `Alumno ${alumno.nombre} eliminado con éxito`, 'success');
        });
      }
    });

  }

}
