import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesHPComponent } from './personajes-hp.component';

describe('PersonajesHPComponent', () => {
  let component: PersonajesHPComponent;
  let fixture: ComponentFixture<PersonajesHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesHPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
