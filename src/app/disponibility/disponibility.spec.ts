import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disponibility } from './disponibility';

describe('Disponibility', () => {
  let component: Disponibility;
  let fixture: ComponentFixture<Disponibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disponibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disponibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
