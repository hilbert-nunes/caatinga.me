import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreRoutingModule } from './arvore-routing.module';
import { ArvoreUpdateComponent } from './arvore/arvore-update.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ArvoreRoutingModule
  ]
})
export class ArvoreModule { }
