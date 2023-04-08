import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaumComponent } from './daum.component';

describe('DaumComponent', () => {
  let component: DaumComponent;
  let fixture: ComponentFixture<DaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
