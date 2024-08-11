import { Component } from '@angular/core';
import { IPersona } from '../interfaces/IPersona';

@Component({
  selector: 'app-formulario-plantilla',
  templateUrl: './formulario-plantilla.component.html',
  styleUrl: './formulario-plantilla.component.css'
})
export class FormularioPlantillaComponent {

  persona: IPersona = {
    nombres: '',
    apellidos: '',
    edad: 0
  }

  procesar() {
    console.log(this.persona);
  }

}
