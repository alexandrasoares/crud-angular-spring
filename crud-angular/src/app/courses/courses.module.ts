import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
