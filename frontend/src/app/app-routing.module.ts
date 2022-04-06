import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArvoreComponent } from './arvore/arvore/arvore.component';
import { ArvoresComponent } from './arvores/arvores/arvores.component';
import { HomeComponent } from './home/home/home.component';

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
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
