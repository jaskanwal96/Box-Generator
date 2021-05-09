import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxGeneratorRoutingModule } from './box-generator-routing.module';
import { FenceComponent } from './_components/fence/fence.component';
import { BoxComponent } from './_components/box/box.component';


@NgModule({
  declarations: [FenceComponent, BoxComponent],
  imports: [
    CommonModule,
    BoxGeneratorRoutingModule
  ]
})
export class BoxGeneratorModule { }
