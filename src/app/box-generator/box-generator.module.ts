import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxGeneratorRoutingModule } from './box-generator-routing.module';
import { FenceComponent } from './_components/fence/fence.component';
import { BoxComponent } from './_components/box/box.component';
import { BoxGeneratorComponent } from './box-generator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FenceComponent, BoxComponent, BoxGeneratorComponent],
  imports: [
    CommonModule,
    BoxGeneratorRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class BoxGeneratorModule { }
