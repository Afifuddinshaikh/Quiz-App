import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchoicesComponent } from './addchoices.component';

describe('AddchoicesComponent', () => {
  let component: AddchoicesComponent;
  let fixture: ComponentFixture<AddchoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddchoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
