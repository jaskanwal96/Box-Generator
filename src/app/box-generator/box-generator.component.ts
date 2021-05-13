import { Component, HostListener, OnInit, Output } from '@angular/core';
import { KEY_CODE } from './box.struct';
import { BoxService } from './_providers';

@Component({
  selector: 'app-box-generator',
  templateUrl: './box-generator.component.html',
  styleUrls: ['./box-generator.component.scss']
})
export class BoxGeneratorComponent implements OnInit {

  checked = true;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.checked) {
      switch(event.keyCode) {
        case KEY_CODE.UP_ARROW: this.boxService.moveBox(KEY_CODE.UP_ARROW);break;
        case KEY_CODE.LEFT_ARROW: this.boxService.moveBox(KEY_CODE.LEFT_ARROW);break;
        case KEY_CODE.RIGHT_ARROW: this.boxService.moveBox(KEY_CODE.RIGHT_ARROW);break;
        case KEY_CODE.DOWN_ARROW: this.boxService.moveBox(KEY_CODE.DOWN_ARROW);break;
        case KEY_CODE.DELETE: this.boxService.deleteBox(); break;
      }
    }
  }
  
  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
  }

  createBox() {
    this.boxService.addBox();
  }
}
