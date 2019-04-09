import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.scss']
})
export class MessagePreviewComponent implements OnInit {

  title: string;
  messageViewable: boolean;

  constructor() { }

  ngOnInit() {
    this.title = 'Welcome!';
    this.messageViewable = Math.random() >= 0.4;
  }

}
