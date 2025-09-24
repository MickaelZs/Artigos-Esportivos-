import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faixa } from './faixa';

describe('Faixa', () => {
  let component: Faixa;
  let fixture: ComponentFixture<Faixa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faixa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faixa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
