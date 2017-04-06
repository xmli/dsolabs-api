import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidestarComponent } from './guidestar.component';

describe('GuidestarComponent', () => {
  let component: GuidestarComponent;
  let fixture: ComponentFixture<GuidestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
