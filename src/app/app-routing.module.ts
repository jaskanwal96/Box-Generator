import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'box-generator', pathMatch: 'full'},
    { path: 'box-generator', loadChildren: () => import('./box-generator/box-generator.module').then(m => m.BoxGeneratorModule), pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
