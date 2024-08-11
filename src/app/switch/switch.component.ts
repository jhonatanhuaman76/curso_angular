import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  dia?: number;

  mostrarDia(dia: string) {
    this.dia = parseInt(dia) || -1;
  }
}
