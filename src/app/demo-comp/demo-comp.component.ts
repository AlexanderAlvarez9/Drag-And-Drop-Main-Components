import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit {

  @Input() ddn: number;
  
  constructor() { }

  ngOnInit() {        
  }


}
