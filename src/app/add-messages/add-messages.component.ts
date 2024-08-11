import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {

  constructor(public messageService: MessagesService) { }

  message: string = '';

  addMessage() {
    this.messageService.add(this.message);
    this.message = '';
  }
}