import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollnoComponent } from './studentrollno.component';

describe('StudentrollnoComponent', () => {
  let component: StudentrollnoComponent;
  let fixture: ComponentFixture<StudentrollnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentrollnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
