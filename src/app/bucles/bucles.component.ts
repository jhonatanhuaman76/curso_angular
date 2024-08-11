import { Component } from '@angular/core';
import { IPersona } from '../interfaces/IPersona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas: IPersona[] = [
    { nombres: 'Jhonatan Adriel', apellidos: 'Huaman Pintado', edad: 19 },
    { nombres: 'Natalia Viviana', apellidos: 'Perez Hernandez', edad: 18 },
    { nombres: 'Luis Alberto', apellidos: 'Lopez Gutierrez', edad: 20 },
    { nombres: 'Cristian Adrian', apellidos: 'Alvarez Torres', edad: 21 }
  ];
}
