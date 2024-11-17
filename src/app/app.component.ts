import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ver Estudiantes', url: 'verestudiantes', icon: 'warning' },
    { title: 'Formulario', url: 'formulario', icon: 'warning' },
    { title: 'GPS', url: 'ubicacion', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
