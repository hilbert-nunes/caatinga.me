import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArvoreComponent } from '../arvore/arvore/arvore.component';
import { ArvoresComponent } from '../arvores/arvores/arvores.component';

const routes: Routes = [
  {
    path: 'arvore',
    pathMatch: 'full',
    component: ArvoreComponent
  },
  {
    path: 'arvores',
    pathMatch: 'full',
    component: ArvoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
