import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.scss']
})
export class Content2Component implements OnInit {
  @Input() public content: any;

  constructor() { }

  ngOnInit() {
  }

}
