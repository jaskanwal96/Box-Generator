import { Component, OnInit } from '@angular/core';
import { BoxService } from '../../_providers';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
  styleUrls: ['./fence.component.scss']
})
export class FenceComponent implements OnInit {

  boxes = [];
  constructor(private boxService: BoxService) {
    this.boxService.createBox$.subscribe((newBox) => {
      this.boxes.push(newBox);
    })
  }

  ngOnInit(): void {
  }

  selectBox(box) {
    this.boxService.selectBox(box);
  }

}
