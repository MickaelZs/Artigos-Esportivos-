import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListagemComponent } from './tabela-listagem';

describe('TabelaListagem', () => {
  let component: TabelaListagemComponent;
  let fixture: ComponentFixture<TabelaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
