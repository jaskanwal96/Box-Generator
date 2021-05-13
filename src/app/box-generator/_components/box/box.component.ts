import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() boxData;
  constructor() { }

  ngOnInit(): void {
  }

  selectBox($event) {
    console.log($event);
  }
}
