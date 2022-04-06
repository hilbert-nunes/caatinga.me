import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoresComponent } from './arvores.component';

describe('ArvoresComponent', () => {
  let component: ArvoresComponent;
  let fixture: ComponentFixture<ArvoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
