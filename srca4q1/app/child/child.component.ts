import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentdata;
  @Output() myevent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendData(value)
  {
    this.myevent.emit("Hello from child");
  }

}
