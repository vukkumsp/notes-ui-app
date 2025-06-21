import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminView } from './admin-view';

describe('AdminView', () => {
  let component: AdminView;
  let fixture: ComponentFixture<AdminView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
