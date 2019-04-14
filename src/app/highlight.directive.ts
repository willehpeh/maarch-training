import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseenter($event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseleave($event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
  }

  constructor(private element: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {

  }
}
