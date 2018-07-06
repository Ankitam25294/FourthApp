import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpriceComponent } from './bookprice.component';

describe('BookpriceComponent', () => {
  let component: BookpriceComponent;
  let fixture: ComponentFixture<BookpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
