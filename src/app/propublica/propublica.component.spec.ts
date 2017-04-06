import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropublicaComponent } from './propublica.component';

describe('PropublicaComponent', () => {
  let component: PropublicaComponent;
  let fixture: ComponentFixture<PropublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
