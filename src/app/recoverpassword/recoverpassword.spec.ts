import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recoverpassword } from './recoverpassword';

describe('Recoverpassword', () => {
  let component: Recoverpassword;
  let fixture: ComponentFixture<Recoverpassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recoverpassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recoverpassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
