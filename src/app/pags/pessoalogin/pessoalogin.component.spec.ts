import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaloginComponent } from './pessoalogin.component';

describe('PessoaloginComponent', () => {
  let component: PessoaloginComponent;
  let fixture: ComponentFixture<PessoaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
