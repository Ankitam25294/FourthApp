import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentrollno',
  templateUrl: './studentrollno.component.html',
  styleUrls: ['./studentrollno.component.css']
})
export class StudentrollnoComponent implements OnInit {

  public student=[];
  constructor(private studentservice:StudentService) { }

  ngOnInit() {
    this.studentservice.getBatchDetails().subscribe(data=>this.student=data);
  }

}
