import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { EditCredentialComponent } from './edit-credential.component';

describe('EditCredentialComponent', () => {
  let component: EditCredentialComponent;
  let fixture: ComponentFixture<EditCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCredentialComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '123' }) // Simular um ID da rota
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capture the route ID', () => {
    expect(component.id).toBe(123); // Verifica se o ID foi capturado corretamente
  });
});
