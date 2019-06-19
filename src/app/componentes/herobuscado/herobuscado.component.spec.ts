import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobuscadoComponent } from './herobuscado.component';

describe('HerobuscadoComponent', () => {
  let component: HerobuscadoComponent;
  let fixture: ComponentFixture<HerobuscadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerobuscadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerobuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
