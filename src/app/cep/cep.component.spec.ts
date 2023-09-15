import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepComponent } from './cep.component';

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CepComponent]
    });
    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
