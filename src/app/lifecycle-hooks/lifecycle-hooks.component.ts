import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, DoCheck, OnChanges, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  myText: string;
  @Input() myTextFromOutside: string;
  hooks: string[] = [];

  constructor() { }

  ngOnInit() {
    this.addHook('OnInit');
    this.myText = 'Here is some text!';
  }

  ngDoCheck() {
    this.addHook('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addHook('OnChanges');
    console.log('Changes made:');
    console.log(changes);
  }

  ngOnDestroy() {
    this.addHook('OnDestroy');
  }

  ngAfterContentChecked() {
    this.addHook('AfterContentChecked');
  }

  ngAfterContentInit() {
    this.addHook('AfterContentInit');
  }

  ngAfterViewChecked() {
    this.addHook('AfterViewChecked');
  }

  ngAfterViewInit() {
    this.addHook('AfterViewInit');
  }

  onChangeText() {
    this.myText = 'Here is the modified text!';
  }

  onPrintHooks() {
    console.log(this.hooks);
  }

  addHook(hook: string) {
    console.log(hook);
    this.hooks.push(hook);
  }

}
