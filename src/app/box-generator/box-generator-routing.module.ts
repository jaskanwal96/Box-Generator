import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxGeneratorComponent } from './box-generator.component';
import { FenceComponent } from './_components/fence/fence.component';

const routes: Routes = [{ path: '', component: BoxGeneratorComponent, pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxGeneratorRoutingModule { }
