import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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

  @ViewChild('cardTitle') cardTitle: ElementRef;

  constructor() {
    this.messageViewable = false;
  }

  ngOnInit() {
    this.titleColor = 'dodgerblue';
    this.titleStyle = { color: 'peru' };
  }

  onView() {
    this.wasViewed.emit(this.cardTitle.nativeElement.textContent);
  }

}
