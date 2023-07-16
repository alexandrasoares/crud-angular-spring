import { NgModule } from '@angular/core';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatTableModule,
    MatTableModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,    
  ],
})
export class AngularMaterialModule { }
