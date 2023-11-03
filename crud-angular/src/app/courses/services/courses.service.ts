import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { CourseInterface } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = '/assets/course.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  // GET List
  listCourses() {
    return this.httpClient.get<CourseInterface[]>(this.API).pipe(first(), delay(5000), tap(courses => console.log(courses)));
  }

  save(record: CourseInterface) {
       }
}
