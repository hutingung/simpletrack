import {Component, OnInit} from '@angular/core';
import { environment } from './../../environments/environment';

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
    this.qrCodeUrl = environment.hostUrl + btoa(url);
    console.log(this.qrCodeUrl);
  }

  onPrint() {

  }

}
