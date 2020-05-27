import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DetalhesComponent}
];

@NgModule({
  declarations: [DetalhesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class DetalhesModule { }
