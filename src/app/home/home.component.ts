import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  qrCodeUrl: string;

  constructor() { }
  ngOnInit() {
  }

  set url(url: string) {
    this.qrCodeUrl = 'http://localhost:4200/visitor?url=' + btoa(url);
    console.log(this.qrCodeUrl);
  }

  onPrint() {

  }

}
