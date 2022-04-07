import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArvoreComponent } from './arvore/arvore/arvore.component';
import { HomeComponent } from './home/home/home.component';
import { ArvoresComponent } from './arvores/arvores/arvores.component';

@NgModule({
  declarations: [
    AppComponent,
    ArvoreComponent,
    ArvoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
