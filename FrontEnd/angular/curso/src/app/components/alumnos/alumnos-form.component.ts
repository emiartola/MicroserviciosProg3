import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {

  titulo = "Crear alumnos";

  alumno: Alumno = new Alumno();

  error: any;

  constructor(private service: AlumnoService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let number = params.get('id');
      const id: number = number? +number : 0;
      //const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(alumno => this.alumno = alumno)
      }
    });
  }

  public crear(): void {
    this.service.crear(this.alumno).subscribe(alumno => {
      console.log(alumno);
      Swal.fire('Nuevo:',`Alumno ${alumno.nombre} creado con éxito`, 'success');
      this.router.navigate(['/alumnos']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void {
    this.service.editar(this.alumno).subscribe(alumno => {
      console.log(alumno);
      Swal.fire('Modificado:', `Alumno ${alumno.nombre} actualizado con éxito`, 'success');
      this.router.navigate(['/alumnos']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

}
