import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './public/components/home/home.component';
import { UpdateTreeComponent } from './private/components/update-tree/update-tree.component';
import { CreateTreeComponent } from './private/components/create-tree/create-tree.component';
import { TreeComponent } from './public/components/tree/tree.component';
import { TreeListComponent } from './public/components/tree-list/tree-list.component';
import { LoginComponent } from './public/components/login/login.component';
import { ApiComponent } from './public/components/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateTreeComponent,
    CreateTreeComponent,
    TreeComponent,
    TreeListComponent,
    LoginComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
