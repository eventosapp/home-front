import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public configuracion_proyectos = environment.proyectos;
}
