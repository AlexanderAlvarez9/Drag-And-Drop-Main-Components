import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-comp-3',
  templateUrl: './demo-comp-3.component.html',
  styleUrls: ['./demo-comp-3.component.css']
})
export class DemoComp3Component implements OnInit {

  @Input() txt: number;

  counter = 1;
  constructor() { }

  ngOnInit() {
  }

}