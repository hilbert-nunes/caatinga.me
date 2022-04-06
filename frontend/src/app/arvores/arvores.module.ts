import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoresRoutingModule } from './arvores-routing.module';
import { ArvoresComponent } from './arvores/arvores.component';


@NgModule({
  declarations: [
    ArvoresComponent
  ],
  imports: [
    CommonModule,
    ArvoresRoutingModule
  ]
})
export class ArvoresModule { }
