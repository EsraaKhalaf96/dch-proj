import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPrivilageComponent } from './prof-privilage.component';

describe('ProfPrivilageComponent', () => {
  let component: ProfPrivilageComponent;
  let fixture: ComponentFixture<ProfPrivilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfPrivilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPrivilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
