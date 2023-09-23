import { Component } from '@angular/core';
import { product } from 'src/app/constants/main.constants';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {

  public products: product[] = [
    {
      title: "Titulo de prueba",
      desciption: "Descripción de prueba",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/165px-Tux.svg.png",
      imageAlt: "Si la imagen no carga..."
    },
    {
      title: "Titulo de prueba",
      desciption: "Descripción de prueba",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/165px-Tux.svg.png",
      imageAlt: "Si la imagen no carga..."
    },
    {
      title: "Titulo de prueba",
      desciption: "Descripción de prueba",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/165px-Tux.svg.png",
      imageAlt: "Si la imagen no carga..."
    }
  ];
}
