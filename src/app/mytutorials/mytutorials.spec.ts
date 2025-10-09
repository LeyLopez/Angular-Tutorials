import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytutorials } from './mytutorials';

describe('Mytutorials', () => {
  let component: Mytutorials;
  let fixture: ComponentFixture<Mytutorials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytutorials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mytutorials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
