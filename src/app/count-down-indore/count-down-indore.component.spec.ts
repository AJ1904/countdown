import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownIndoreComponent } from './count-down-indore.component';

describe('CountDownIndoreComponent', () => {
  let component: CountDownIndoreComponent;
  let fixture: ComponentFixture<CountDownIndoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownIndoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownIndoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
