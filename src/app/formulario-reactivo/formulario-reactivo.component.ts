import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  name = new FormControl('');
  email = new FormControl('');

  onSubmit() {
    console.log(this.name.value);
    console.log(this.email.value);
  }
}
