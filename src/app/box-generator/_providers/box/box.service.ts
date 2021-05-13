import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as randomWords from 'random-words';
import { KEY_CODE } from '../../box.struct';
@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private numberOfBoxes = 0;
  private createBoxSource = new Subject<any>();
  public createBox$ = this.createBoxSource.asObservable();
  selectedBox: any;
  throttle = 100;
  BOX_SIZE = 100;
  MAX_HEIGHT = 500 - this.BOX_SIZE;
  MAX_WIDTH = 600 - this.BOX_SIZE;

  constructor() { }

  addBox() {
    this.createBoxSource.next({
      id: ++this.numberOfBoxes,
      name: randomWords()
    })
  }

  selectBox(box) {
    this.selectedBox = box.id;
  }

  moveBox(key: KEY_CODE) {
    // Getting the element by its unique id and transforming style
    if (this.selectedBox) {
      const selectedElement = document.getElementById('box-' + this.selectedBox);
      const selectedElementStyle = window.getComputedStyle(selectedElement);
      const top = parseInt(selectedElementStyle.top);
      const left = parseInt(selectedElementStyle.left);
      switch(key) {
        // Verifying if the box is under the fence dimensions
        case KEY_CODE.UP_ARROW:
          selectedElement.style.top = top - this.throttle < 0 ? '0px': top - this.throttle + 'px';
          break;
        case KEY_CODE.LEFT_ARROW:
          selectedElement.style.left = left - this.throttle < 0 ? '0px': left - this.throttle + 'px';
          break;
        case KEY_CODE.RIGHT_ARROW:
          selectedElement.style.left = left + this.throttle < this.MAX_WIDTH ? left + this.throttle + 'px': this.MAX_WIDTH + 'px';
          break;
        case KEY_CODE.DOWN_ARROW:
          selectedElement.style.top = top + this.throttle < this.MAX_HEIGHT ? top + this.throttle + 'px': this.MAX_HEIGHT + 'px';
          break;
      }
    } 
  }

  deleteBox() {
    if (this.selectedBox) {
      const selectedElement = document.getElementById('box-' + this.selectedBox);
      this.selectedBox = null;
      selectedElement.remove();
    }
  }
}
