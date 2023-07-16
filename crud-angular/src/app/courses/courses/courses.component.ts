import { Component, OnInit } from '@angular/core';

// Models
import { CourseInterface } from '../model/course';

// Services
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<CourseInterface[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesServices: CoursesService,
    public dialog: MatDialog,
  ) {
    this.courses$ = this.coursesServices.listCourses().pipe(catchError(error => {
      this.onError('Erro ao carregar itens!');
      return of([]);
    }));
  }

  ngOnInit(): void {

  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
