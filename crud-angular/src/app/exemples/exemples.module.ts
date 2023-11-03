import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ExemplesItensComponent } from './exemples-itens/exemples-itens.component';
import { ExemplesRoutingModule } from './exemples-routing.module';

@NgModule({
  declarations: [
    ExemplesItensComponent,
  ],
  imports: [
    CommonModule,
    ExemplesRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ExemplesModule { }
