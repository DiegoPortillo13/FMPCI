import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTablaComponent } from './pro-tabla.component';

describe('ProTablaComponent', () => {
  let component: ProTablaComponent;
  let fixture: ComponentFixture<ProTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
