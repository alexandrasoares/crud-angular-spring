import { Component, OnInit } from '@angular/core';
import { CourseInterface } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses: CourseInterface[] = [
    { _id: "1", name: "Angular", category: "Front-End"}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {

  }
}
