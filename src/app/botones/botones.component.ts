import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  css_text_color: string = '';
  css_button_disabled: boolean = false;
  src: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
}
