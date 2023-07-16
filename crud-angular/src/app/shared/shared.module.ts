import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';



@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
  ]
})
export class SharedModule { }
