import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoresRoutingModule } from './arvores-routing.module';
import { ArvoresComponent } from './arvores/arvores.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArvoresRoutingModule
  ]
})
export class ArvoresModule { }
