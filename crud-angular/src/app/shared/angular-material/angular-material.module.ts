import { NgModule } from '@angular/core';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,  
    MatProgressSpinnerModule,
    MatDialogModule,  
    MatButtonModule,
    MatIconModule,
  ],
})
export class AngularMaterialModule { }
