import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreComponent } from './arvore.component';

describe('ArvoreComponent', () => {
  let component: ArvoreComponent;
  let fixture: ComponentFixture<ArvoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
