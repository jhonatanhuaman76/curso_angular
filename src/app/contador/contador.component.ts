import { Component } from '@angular/core';
import { IPersona } from '../interfaces/IPersona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  /*
    Estas propiedades solo se puede usar en este componente; no en otros, asi sean padres o hijos.
  */
  
  mensaje:string = 'Estoy en Contador App';
  
  persona: IPersona = {
    nombres: 'Jhonatan Adriel',
    apellidos: 'Huaman Pintado',
    edad : 19
  }
}
