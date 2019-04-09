import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.scss']
})
export class MessagePreviewComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  subtitle: string;
  @Input() messageViewable: boolean;
  titleColor: string;
  titleStyle: {};

  constructor() {
    this.messageViewable = false;
  }

  ngOnInit() {
    this.titleColor = 'dodgerblue';
    this.titleStyle = { color: 'peru' };
  }

  onView() {
    alert('Viewing message!');
  }

}
