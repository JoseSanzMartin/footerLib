import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterJoseVComponent } from './footer-jose-v.component';

describe('FooterJoseVComponent', () => {
  let component: FooterJoseVComponent;
  let fixture: ComponentFixture<FooterJoseVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterJoseVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterJoseVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
