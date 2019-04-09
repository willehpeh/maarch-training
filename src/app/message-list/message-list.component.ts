import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messageArray: { title: string, message: string, viewable: boolean }[] = [
    { title: 'First title',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      viewable: true
    },
    { title: 'Second title',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      viewable: false
    },
    { title: 'Third title',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      viewable: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onMessageViewed(messageTitle: string) {
    alert(`Message ${messageTitle} was viewed!`);
  }

}
