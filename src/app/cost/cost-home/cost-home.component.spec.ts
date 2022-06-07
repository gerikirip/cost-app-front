import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostHomeComponent } from './cost-home.component';

describe('CostHomeComponent', () => {
  let component: CostHomeComponent;
  let fixture: ComponentFixture<CostHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
