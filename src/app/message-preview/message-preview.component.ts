import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() wasViewed = new EventEmitter<string>();

  constructor() {
    this.messageViewable = false;
  }

  ngOnInit() {
    this.titleColor = 'dodgerblue';
    this.titleStyle = { color: 'peru' };
  }

  onView() {
    this.wasViewed.emit(this.title);
  }

}
