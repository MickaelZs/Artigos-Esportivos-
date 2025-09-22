import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCamisaTime } from './card-camisa-time';

describe('CardCamisaTime', () => {
  let component: CardCamisaTime;
  let fixture: ComponentFixture<CardCamisaTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCamisaTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCamisaTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
