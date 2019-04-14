import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // insertedText: string;

  ngOnInit() {
    // this.insertedText = 'Original inserted text!';
    // setTimeout(() => {
    //   this.insertedText = 'Modified inserted text!';
    // }, 4000);
  }
}
