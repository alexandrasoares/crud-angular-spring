import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExemplesItensComponent } from './exemples-itens/exemples-itens.component';


const routes: Routes = [
  { path: '', component: ExemplesItensComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplesRoutingModule { }
