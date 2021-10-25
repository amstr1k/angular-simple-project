import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor() {
    console.log('constructor `Home` component');
  }

  ngOnInit(): void {
    console.log('ngOnInit `Home` component');
  }

}
