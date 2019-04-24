import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.scss']
})
export class Content1Component implements OnInit {
  @Input() public content: any;

  constructor() { }

  ngOnInit() {
  }

}
