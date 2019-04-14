import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.scss']
})
export class MessagePreviewComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() title: string;
  @Input() message: string;
  subtitle: string;
  @Input() messageViewable: boolean;
  titleColor: string;
  titleStyle: {};

  @Output() wasViewed = new EventEmitter<string>();

  @ViewChild('cardTitle') cardTitle: ElementRef;

  @ContentChild('disabled') disabled: ElementRef;

  constructor() {
    this.messageViewable = false;
  }

  ngOnInit() {
    this.titleColor = 'dodgerblue';
    this.titleStyle = { color: 'peru' };
  }

  ngAfterContentInit() {
    if (this.messageViewable) {
      this.disabled.nativeElement.textContent = '';
    }
  }

  ngAfterViewInit() {
    if (this.cardTitle.nativeElement.textContent === 'First title') {
      this.cardTitle.nativeElement.textContent = 'Modified first title!';
    }
  }

  onView() {
    this.wasViewed.emit(this.cardTitle.nativeElement.textContent);
  }

}
