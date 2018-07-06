import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudentinfo } from './studentinfo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  private url:string="./assets/Data/studentinfo.json";

  getBatchDetails():Observable<Istudentinfo[]>
  {
    return this.http.get<Istudentinfo[]>(this.url);
  }
}
