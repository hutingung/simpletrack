import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Visitor} from './visitor';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  visitor;

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.visitor = new Visitor(params.url);
    });
  }

  onSubmit() {
    console.log(this.visitor.getSubmitUrl());
    window.open(this.visitor.getSubmitUrl(), '_blank');
  }

}
