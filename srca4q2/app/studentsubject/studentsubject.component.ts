import { Component, OnInit } from '@angular/core';
import{StudentService} from '../student.service';
@Component({
  selector: 'app-studentsubject',
  templateUrl: './studentsubject.component.html',
  styleUrls: ['./studentsubject.component.css']
})
export class StudentsubjectComponent implements OnInit {

  public student=[];
  constructor(private studentservice:StudentService) { }

  ngOnInit() {
    this.studentservice.getBatchDetails().subscribe(data=>this.student=data);
  }

}
