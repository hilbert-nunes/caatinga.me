import { LoginComponent } from './public/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { UpdateTreeComponent } from './private/components/update-tree/update-tree.component';
import { CreateTreeComponent } from './private/components/create-tree/create-tree.component';
import { TreeComponent } from './public/components/tree/tree.component';
import { TreeListComponent } from './public/components/tree-list/tree-list.component';
import { ApiComponent } from './public/components/api/api.component';

const routes: Routes = [
{
  path: 'arvore-update/:singleName',
  pathMatch: 'full',
  component: UpdateTreeComponent
},
{
    path: 'arvore/:singleName',
    pathMatch: 'full',
    component: TreeComponent
},
{ path: 'arvore-create',
  pathMatch: 'full',
  component: CreateTreeComponent
},
{
  path: 'arvores',
  pathMatch: 'full',
  component: TreeListComponent
},
{
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent
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
  path: 'api',
  component: ApiComponent
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
