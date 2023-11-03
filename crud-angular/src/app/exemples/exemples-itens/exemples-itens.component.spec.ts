import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesItensComponent } from './exemples-itens.component';

describe('ExemplesItensComponent', () => {
  let component: ExemplesItensComponent;
  let fixture: ComponentFixture<ExemplesItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplesItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplesItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
