import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeDetalheComponent } from './especialidade-detalhe.component';

describe('EspecialidadeDetalheComponent', () => {
  let component: EspecialidadeDetalheComponent;
  let fixture: ComponentFixture<EspecialidadeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
