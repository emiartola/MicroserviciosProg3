import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent extends CommonFormComponent<Curso, CursoService> implements OnInit {

  constructor(service: CursoService, 
    router: Router,
    route: ActivatedRoute) { 
      super(service, router, route);
      this.titulo = 'Crear curso';
      this.model = new Curso();
      this.redirect = '/cursos';
      this.nombreModel = Curso.name;
    }

 
}
