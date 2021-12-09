import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-comp-2',
  templateUrl: './demo-comp-2.component.html',
  styleUrls: ['./demo-comp-2.component.css']
})
export class DemoComp2Component implements OnInit {

  @Input() btn: number;

  constructor() { }

  ngOnInit() {
  }

}