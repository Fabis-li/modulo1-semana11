import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioAulaComponent } from './exercicio-aula.component';

describe('ExercicioAulaComponent', () => {
  let component: ExercicioAulaComponent;
  let fixture: ComponentFixture<ExercicioAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
