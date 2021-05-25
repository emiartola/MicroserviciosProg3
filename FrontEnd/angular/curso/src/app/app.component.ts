import { Component } from '@angular/core';

@Component({ //decorador para configurar
  selector: 'app-root', // donde se muestra el contenido del componente
  templateUrl: './app.component.html',  //vista
  styleUrls: ['./app.component.css'] //estilos (opcional)
})
export class AppComponent {  //clase ts
  title = 'curso';
}
