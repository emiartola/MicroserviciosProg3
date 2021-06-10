import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ResponderExamenComponent } from './components/alumnos/responder-examen.component';
import { AsignarAlumnosComponent } from './components/cursos/asignar-alumnos.component';
import { AsignarExamenesComponent } from './components/cursos/asignar-examenes.component';
import { CursosFormComponent } from './components/cursos/cursos-form.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExamenFormComponent } from './components/examenes/examen-form.component';
import { ExamenesComponent } from './components/examenes/examenes.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'cursos'}, //ruta vacía
  {path: 'alumnos', component:AlumnosComponent},
  {path: 'alumnos/form', component:AlumnosFormComponent},
  {path: 'alumnos/form/:id', component:AlumnosFormComponent},
  {path: 'alumnos/responder-examen/:id', component:ResponderExamenComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'cursos/form', component:CursosFormComponent},
  {path: 'cursos/form/:id', component:CursosFormComponent},
  {path: 'examenes', component:ExamenesComponent},
  {path: 'examenes/form', component:ExamenFormComponent},
  {path: 'examenes/form/:id', component:ExamenFormComponent},
  {path: 'cursos/asignar-alumnos/:id', component:AsignarAlumnosComponent},
  {path: 'cursos/asignar-examenes/:id', component:AsignarExamenesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
